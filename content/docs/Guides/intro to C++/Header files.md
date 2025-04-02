---
sys:
  pageId: "790d67e8-cdf4-4955-a0c2-ca740556451a"
  createdTime: "2024-06-25T02:29:00.000Z"
  lastEditedTime: "2024-07-08T23:43:00.000Z"
  propFilepath: "docs/Guides/intro to C++/Header files.md"
title: "Header files"
date: "2024-07-08T23:43:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 117
toc: false
icon: ""
---

Unlike python or Java C/C++ splits its files

<details>
      <summary>Why do we do this??</summary>
      In C++ we can’t use a function until we have defined it
  </details>

`.h` file (header file) is like we deleted the body of the function

ILoveBen.h

```cpp
int ILoveBen();

```

ILoveBen.cpp

```cpp
#include "ILoveBen.h"
int ILoveBen(){
    return 10;
}

```

main.cpp

```cpp
#include "ILoveBen.h"

int main(){
    printf("%d\\n",ILoveBen());
}

```

## Classes in header files example:

## TODO explain y classes have a :: in .cpp file

Ilk.h:

```cpp

class Ilk
{
private:
    int milk;
    int private_func();

public:
    Ilk(int milk);
    ~Ilk();
    void drink(int galOfPilk);
    int getMilk();
};

```

Ilk.cpp:

```cpp
#include "Ilk.h"


int Ilk::private_func() {
    return 69;
}

Ilk::Ilk(int milk) {
    this->milk = milk;
}
Ilk::~Ilk() {}

void Ilk::drink(int galOfPilk) {
    printf("drinking %dL of PILK\n", galOfPilk);
    printf("%d\n", this->private_func());
}
int Ilk::getMilk() {
    return this->milk;
}

```

main.cpp:

```cpp
#include "Ilk.h"


int main() {
    Ilk *i = new Ilk(420);
    printf("%d\n",i->getMilk());
}


```

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVLKLYAG%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T070905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQDDDIYAMwgv6VaoBB%2FQepZnuphpjv6zm7zn%2Bds9rvPsmgIhAIAt6adX6VRdPCcucmqj3i6IjMaLROBVCsS4i2QdL83wKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxUH5movDSderNXZ0Iq3AOHjpQ8td5mR0lpINekcdNT4AKEyhQWSH2u7jN5yxjE026DqEM9Nlm%2FPHeRmGW9pmQFU9pQzuiyFSpnwZrn%2FMqwmR8V28o8wtti9ssVXYkMqzKXl%2BFWPT1Jy8vsTUN9HSQQP9sBAbsvmqxmgqI7L9CsYIJoQWhu0nGcRzkmrASOJyn3q8s5acljn7i0d8emIgi%2BI%2BFFC%2BVs0Awv97SHbprS47Ee9fkEti4vjg%2FJuz3dNdWsNIK1is6YD4qJ70vt%2Br0megEn6JqWjjaBSLLwOhdQRC4Uc4oHUhmSVBFf7Zy0fIK7sznPK2JjiRBAVenbPRq1UOD9UT2A4QG3zeGEA%2FchpcIR6h81fS9jE%2B%2Fj9ugHblkKNb%2BHMWOaIiZwS2WArIQYa2OhYPMEfCBZUZHhO%2Bv3gffuvK6FEwxc5KTsSXgxIZ5OH8wF6McWe2HiIKRY1tX1M9vUXC3roBZn3VH2D6SL5AVNgaWMBiEONbNRdr7lUyfWS4Nfehy92iVr0D70blWHDucxj5VTYQ%2FaKGUbTgyjE4AZKBu45FLFwwERzIavQN8%2BaNqb%2FHmzzF6t1hHenl4brmYbc549BWqzVADlSdoILY2EaOMqcXgvyaOHKeOe44gUwjbHHr7OYKY01jCVtbO%2FBjqkASfP%2BHfrM7aoivLmC4QA7HGDr%2BDT3bsTE9S6J42CWpnQEq%2BP3YdXXkqgV2NL%2FtUi5Hi6cQaU23%2Ff2e7yayZ1%2FF9EcIRoBZSlr6ApLC8If391OwMjpZ8zBH%2F0BNvVtSdGlZnemYuqMjiKkYkUGMDYSJBXmZi1DE621Z626rU4Pcy%2Bkm0uve%2BbFsUnLnFRmrzByuywbIDBSJMTyZLOJ1b6AIuDrfSw&X-Amz-Signature=5d9e2492c0f802871621df408522b637254da09c8b7b51ad94119192b59751fd&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
