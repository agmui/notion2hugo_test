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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y67IMEOR%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T100707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIEf99%2FsO25z1ilop1sxFEkkAy2USMdhv4%2FF9CwXEkqS3AiBHjh0Hrd2NzrE3oHvIQhguCZ0YM6GIiXTVjiCvdOBYASqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZf3RXNEeav2vfp5LKtwDNiNFb1jH%2F9MHD0kth8R7%2ByNNIqYeBrbQI%2FqmMAqlSi6JxikWiI6XHfnsQccvYMAiDlGTiPrDCBoJ5v6Xo94u%2BWwQPqY%2BQ6hYzfAvwNtnIDBJsGPKNr1YDlS8RzgtIakQ0CmSIbmYYWwWeqZGcU1fhcXVw1OflyuVw1%2FB0gj48SaZAdZB2PgRdS0rYDSwpDcQWUkuEi1VSdkBKKmmZ5zWQPSq0PkdsYVopfewCq0nW%2F%2B5uburC%2FiPESuSwUTnvVtBWkDJhjbHEvkwY5j7P3xMu6KDBRT0bt%2FO5r%2BnoSzy2U3FvnM2%2Bxr4Aq88CWmY5obFgUqBDOuGu9Eo8tuXmIuoSOoBsqhco35E8489lM8PQbzuUYmaWsa%2FTP9LnZQxgNZeqY8e%2BPUoTmmjlAprc%2FpmA6sLfC6JCO5pUYmhafowbfqcHRDxa6d%2F8dA%2FMC2%2FtGhz9owWb6Gbuwp%2Borf6dRUy0pCOV5xwSIbBDV2PMAPKBg7moEXoSyuDD3kXdSueTHJpO6VtrxWSFxkSSMYvzCUMg6rKF4tgdbswOS8QGBbtAYGDE3FN2y8JMMsGEUuXBaG4Zth%2FO8KV2d2%2Bok8Ews6HazXBN87RbTy%2B6%2FbqYT1vQ56csA5gVhJHPJGaUNAwmuz5vgY6pgEHfnJ5lWeYCgEfZCiD7XOxrRoznRgNDEWrriLsROQN1fdAs7cxNZPJH0e3UDrd%2BTCgaUFlGNZ1gW3krO6MHI0QjwjkPwTU%2BajJq99n7w7m7cgVSpDbdio9ndXM1vciPCkx1aOq93rnSL5vJ7j5EEYFAABxCpR3TOKWjLg5LtouoHFjtgJjH0Xeda1hX6i%2FGPXuEup%2FD%2BFLAiNFRAed4Em7MtEqhmjj&X-Amz-Signature=b0a17bc62d2acd44fc175447f2e086b12062ed4f3b090bfc340991938a8203fc&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
