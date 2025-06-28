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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2JXMHCE%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T004126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC4BOWMrubfioGWK3O5uqGzIJZF1qmy9Ss8dPQDWg5cDAiB10PnhsY9rarIDrWAKFg6EAGKQR9gqrlxahYV0LkAtayqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTOH65VCuyaSJr9eqKtwDuiORIxnh%2FFT%2FIroscSll0bSbzbYmkiGX7vL6t9gyFWupHEl9CAkGhw7baBH5CeeBg8zU3kmldPjO3yAyKPEuBz6HkSn%2BTRxGa0lWxJU%2FHHaGWYc3v40jdH8ORuboZWF5GjQNpa80gpC83z0zeD%2F0j%2F6M0mNvP0Okape2PUqiDA3xl4ByDp3WO6tY5%2BWpFMmdVNImvTqtUfYfDxcb1p%2Bp65k92FuRygYvpb5duz7L1V3YQZ2SLFB3e5WX8Vz5MIakL9mLoFZ81DWQdFty5oxQvlmNIAYIU%2FQOAAl10kR392DHOGAIms7GzchLGdMRFgOg%2FQ4Tp05sZHQpsZztEZ%2Fk971YzE%2FsznH9Sm3xsji2q2ek01bpVHB8sntd0wkZCk4mUram%2F5s1lT19mxCNGdkUizVYIphFjvwlfCqiFRaU5f%2FvJYV%2Fjy1PlGnLb44Zz4tv0j7fgezFw9toqBPcbLkBiYLnduAfuZka7K2Ujs80coyspsI6TbGc5LW02bAnmSfZVseIVj%2BtlR4c3XJ0gAQcGTTxl3SRFZ7mu6ZUcVpgbe6vQDgcKtll1AuTTKiiHIhAUMf8Bovn2T3%2FtjECumBoHuxusi%2F0eRVX8x8i7C7jnI6KgMqgj70OUgG5%2FiQw19b8wgY6pgFlyZdDL2RrSrQY6kdP4gCKFr1FMrhMZWlLiZcRYIjFRpBUzQSZEx1xDlCZ3J%2Fq8Ddu4mE9E7XuEU9zdiWJhk7Q5MRgbdxRuD0alHWgspemsJ21ewM5c2299SQ6%2F4adLUvO1cfZ6Mu%2FFSxbE6FiXLztXnhjEkxvxe9OGkBYq9AbQBjSzD3%2BPT9%2F6HF30rBFkkAhsBJa4sc6aUv9E8CsSIyJAoRp1Mfj&X-Amz-Signature=e14b65dfc0f7a16e6358632a5cb47c977ed04d1073734036798a98a9ecf4bb5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
