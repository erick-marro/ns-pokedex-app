<stackLayout orientation="horizontal" marginTop="25">
  <flexboxLayout
    class="searchbox"
    height="50"
    borderRadius="10"
    paddingLeft="10"
    alignItems="center"
  >
    <label text="&#xf002;" class="fas searchbox-icon" fontSize="20" />
    <textField hint="Search by name" class="outfit search-input" />
  </flexboxLayout>
  <button class="fas filter-btn" text="&#xf1de;" borderRadius="10" />
</stackLayout>

<style>
  .searchbox {
    background-color: #e6e6e6;
    width: 80%;
  }

  .searchbox-icon {
    color: #665f5f;
  }

  .search-input {
    width: 70%;
    border-bottom-width: 1;
    border-bottom-color: transparent;
    font-size: 16px;
    placeholder-color: #696969;
  }

  .filter-btn {
    background-color: #441c1c;
    color: #fff;
    font-size: 20px;
    height: 130px;
  }
</style>
