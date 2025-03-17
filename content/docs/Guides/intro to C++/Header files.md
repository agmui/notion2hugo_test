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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PWP32X2%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T220755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFOiYNkYzGuTJUBcy4w3YFcQhxsF8xZ8BaNnJKGNhK2WAiA7%2FtcjVNSstxD8OhPnIe8SBcxz7ppwWFWYbs2FwLt6Uyr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMw2tXSaHH%2Ba3bqoiqKtwDgMiGtU%2B5B7sUQyxGwEKW877xTBbi5vdy0XnYcYlj2cKOvqd%2BmBzAXJIomcX%2BIRhWHb8DC1f0PAodU%2BIjmpmjocjhbDahbYnfbChMA3ltEVVtZhYoW4G3Fr4liZ7WGOBiyQKtbxHRERl0YfXXEBRoBTlKql%2FzkF2WZ0MsdXN2i1XMGn6krzfm33uf1ugiPXk061ECnmcYlSGi5YLIumYa6pMHF0x%2BICSprRyIx2CN0wk8eydQC9D97T%2FVeLVV1ALXYDhQXPhAxTSyMBwuLQrmLqhvnMjUzQf2wrwn1mgo8%2Bcvx1OfiE8C0DX3V3T69XnzsCpSoSNDH4AvOauHM9JTTlh5fQk1D4Y0KfWxjn7QOyXxogjAMLPud8xsE%2BLVaGptGE4PgahRnYoEhPlTBjSz%2Bae3WC4CwXLB3l11bArFcht3kutroYKdpk5sqm8kzNGlH8I%2BlWHz%2F65jks8iebnhAoTFZUlSYaNhxMLDMLTxSRjj9DFQvJy6Z3us2u0Ku49oC5BVwSYaT63gP9%2BbEZ642yL0ggQo4RP8zstSEZC9Wt0Hxg4HD72kUq6foCWOX7hXQvDEJ47MdMT6%2F88iSGUD3zTKqRRQquHm2EYru3eznX8IfXshaaL0aY4Y8sgwrKPivgY6pgEL6Wp%2FxxXEF56O2AuSjAK0AxzvSuVj26llalhEpdaQ5CpMMdXGyPiK8AErzItQIeFO%2B%2BJjQEF1qPONe9KmKmTIK21bj%2FCkVvW009RYBIkXnSya1JYxrhlwHdzcSg4CBKB6LvUeWkpqWytaKVJyujgHuEVA4%2Bbv%2B4bP0QjU3k%2Fuuq3J9pBACz%2BiFMvlmVzLwZf28e8lU2ukdPDe7fUmpFCXEZ9VYnQ1&X-Amz-Signature=64381d0c8afd3e2f88892370e7029aaf6a14db6f82585742a192f9623e0a868d&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
