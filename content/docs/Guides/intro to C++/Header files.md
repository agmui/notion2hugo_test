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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWPT7556%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T060957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAQeG75TB3SBebz0osNNDD7MXYITfeDU8fREZXDg7f7jAiA%2BQffXhe5amNdM0lt2kHrZme00e6WtUQekwHDYbfXg6SqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvljlyOpbH%2B6n5r9aKtwDF3eHZy%2BDSwKr7xwjGJtP%2BXIqFDFI3q39ZZ7dIC1n0WVJWX9kMCuD1bM1%2BGhMbFbkTa4pA5%2Bnl9lXXOHcAeufzYmfLt9WRTbEJxmNmcOL60WrGl%2BTs0lRVosin3lHelb5S%2Fqh9i1dA66z69pq64f2WpYVqzyt3WkjteRGLYB9MzZ50bu71En52vlok2yxo8JmD3GMhop%2BMLVUqLDMAsi1g8qszM7lFqXgrQKLG9WNBiJZxDtd7CjZBWiiV4hjCHeX7fNmHb65wAQI4LrLMj1itLftW2%2FVJ4cgwbji7nfSNosm4i8cqUlNd2tANc3NEhpXm1E%2FUNSvq4LUJSq4Il8IiIthdw11ejsK6POxLs%2B9EE%2FKYA21VaJsMTbga6XWXjim1AIv0ByNeiEtE8v1G4vzIbFkOJptufRGOdiJufDvEz4NzQohJFCpah3O5sYxdgaJr2keO7saZObNbeayzWl3rRxMX0H%2FpDm66NYYfCWT2Kv2ib6iXsT%2FkwTOaVjfXPJmvsiNTXB%2F9ZQVKIjsjbGx64zLPFAAzc5xtV0dUWJY50Kh4Jh2LmarLaJj%2BX7zNrAp%2BoXlgqRQs1yAoLZqNyPX6LId9Zqq%2BngzA0zI3hTc33ABbbAebDjlkVuDogIwgMnqvQY6pgFCn0J82rSkaXc%2FQ%2BXqz0m2LK%2FjiHbjBWZqpkkGS7CFeJZ98dNG0IlYSZJHBCbodUteqRsUrewqVdzMwD0IpR0JKzw3pyVp1I059jLAeRYIDj%2BgNCZEvQQGsvTN1DfeVapy26%2F2hLRRFhhaojWM4PEERJXnmFWBncpUBBGEMgkepcOpBQjgyLaQGt9Tedjf1dK9YB9Xw%2Fl3uKJnX4zjz%2F6GAL5u7EEP&X-Amz-Signature=58b271e5dcf7c5a435142109140fe211adf3541ebd1da4e055efce71d4f7ee58&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
