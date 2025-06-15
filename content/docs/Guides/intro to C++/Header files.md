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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYC5A2DS%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T034450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIERmI3kqi51NxRnx6el6f8Rj1Pg5OLMSvUOH7bEPiYCgAiEAx%2FnCE%2Bn38YpCy0ZTnEeGRSsd7Wk5MqA6klEoWGnQkMsq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDGa%2FUZ%2FDQjJsRfTx6SrcA%2Fwow%2BjkTpqV0D8Faku5dhv6%2FaP%2Bs%2BbtQqwDw0YpxtCHBwHPgMjfQHhvDJY1hqXrgXRYkuVQlwyQuOKWffUBC%2FNBLaLGKyVkkKiO8mmyJrqJZVE6IBdWEHys8IVWTFBYtb7e%2BQ2QKLFbE3%2FNcsnNnKmVBjGPlvIh0iOWn95pe9K3iOuJV60RX4krKulXc2ACziUmdt3xOnvSTGmhACI3pM3%2FNq%2BN6Rt7ung1E2T3AXom3YWOG%2B0htEogTvNTjqkI5G1pBoECclgSGciY807AnqhR7k%2FG%2FKsA%2FwzXkz4nc8tJ6RlUfK%2FWG%2FPKoDVxOp98G51kyvy%2FW1rQgKsl6OFL2rvqNp%2B0555%2F36zDkxSlQ0O16TbDdMmOTib4a27mVSRaK2Qq0Jg2ls50%2FL%2BePnsG6PzwWg9WpsJPWB8n3Ml7aiZsMMbbJVMycHMnDKkKt0r0vG5q8MULI%2BXFkfqeQWOD4Vtyy0ddI%2B5hMTLra3uanarPFfth8q0yYDO0jF9StNYLxbczBCrXA0dKBDe7JcoNTOzeYyvRG2ehzH13RTVq7nylbcfj2G1FG5bmvAqCHzOGDlLarfDbacIlNG02%2B2nERXVzB7U6UX7Mk2TlTodwikXCI0FR3niQOo%2FBK7xTMIP%2FuMIGOqUBhctDygJ5dVh%2BlWNPsF4JyIOItNpPOKBnMwbNChiaFR8KF8qVSz4IMENwskqtjDHLCOCYbL2bobL1fVAryqK72PUXAs1ARzLKUDBLT7WcDHClzCI0e1CapbRXxmZTH1AmKVEs6u7IgTY3UUn9nQb4z1CivwzVTfK1P3zyVzLnhlzAWRjdlTsvv4%2FTbYOCD5YKda0wU%2By%2F%2FtNcYn7q8jwFq4GppsaR&X-Amz-Signature=90dac414b8069bd96f93d0292a43d0509f57962467c171f3f8ecd718c24781fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
