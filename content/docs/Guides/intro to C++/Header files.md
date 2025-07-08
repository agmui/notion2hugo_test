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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPLLNCII%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T081315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7JTIoymS%2BqkimH2j5DzdoQu7R3GW1xgCibQF0wGQynQIhAKVs94lEUH4tJLuuKU%2BfWc5h14UYu3Y3IUdSdYGI%2BOrDKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwW5kqbLU1xL%2FgGpaUq3AOjr3MdGpaUO5PPRDPX832359acnw9EmWIKRmFgRK7vX48Ek474UyAX9CvfClp4gwLM2dIGvC1IJ8%2Fiy3Hj9K%2FTMl942zdB8T5Pja25nPF8aWgCjyFHLwAqexnXK3BjFJ0l%2FwKZVAHhC%2B%2BkQH8iMfxdfFmWBCwoVogk7k7zndfUkdFg29sCqezfmhda3cDhujuGY75Lcj5ailQGZNOt3WfDz3%2FQhYJvplvxfUyYi1f%2BYzQronK3%2F3%2BJZpKkbNDjxcB6rFOUE1PABNcjwGr3jFYTNJ2bwytiD2OxOV8RFZ0B9hkkIbMPiDdKB6u0U9SscB25oUorU8MeIrJlBd0c1w3aVTvkghOP555Zk14vKBzx7ecSS62k8ZQh8yd88KKf99oOz%2FiRvmTr953upuWs59bQXHiOvYxBVhqzUyoEj5u2eU%2Bv3pL5SjVfwTpCgWgBpak8FMrPDouNM4Gnut9aE6NOLqDcfYm7IjXeTbw%2FkjJt6clwPutVumyebf9fCpe%2FeixHBg7d6FODOchiRuaZp0gU%2BT40%2FplV1SSRTdZguOPD956NodvrG7NdDmH3p8cY%2FzETZpHeitGjOZSSCaBKoK0C8uk4u3QOungns655MP9FVoV6qmei2PvuBGJ9QDCTlbPDBjqkASoN3RBNVKms54rDp1qbEdZjru3M7b%2BfNx7P46wv0FLYHpQvoQRqYfGacQepPvYk2AS6yv9Gy2mH%2FR%2FYxAvhheWSb4DKRxAA6jFdbjsGYQlU2NhQn4PWVqYzhHyQIOM8Rep%2FscIKEwz3ZOHo8LYTXfi%2Fu6eZ544aGR8zM%2Faf6zjXjj9%2Bh%2BtYjS9Kos%2BvyL3SiXw7ocNwbltpf%2F%2FDgpv2EGVtGEzL&X-Amz-Signature=24f44c5d9ff475e420d4f6a75cba05d338bb6b00a03334f74d7dbc889d94f032&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
