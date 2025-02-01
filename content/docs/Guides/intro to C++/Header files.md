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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPCMUYHX%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T060920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDcdtFFrqg4%2FvWCgyfx1aE0IgJO1PNl7ga%2FfuPVvoYpFAiA4%2FSatdiWQhI8JItUizAKxO9hcEwfS1J9Raq8nISs0%2ByqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMr%2FezzA6gsbtLbb%2FCKtwDDnLfReSdRnYnlTmi8A%2FtYe%2BAtQxkw%2ByABhu3SDbiFMbT9fLBLvQT%2FMUJbY%2FjhjBUwzbGI4%2Fe0DTnOQvepq3JsTB4RGKaNek6LfQOP51K%2BhSxvpkabHHBiPyQzC88p3BUnBQgZR9Z8cK6jIBUhGhg1a3iLaRmeU5ypQdTMbldUGSrJsbnx0XLDhXY4vEHD5A2hxMuiNMaVK656Ni3wF7bFZYWHLUcUwOqwcz1WTXJJYjrMviLptmLE6rFihNfIIwgYh1Ia71YTVoDGwYVNYXp7QkS6XzmbMcTcfLhpfbU4AOubrbM%2F2fjHDwuU8aZWZpUB9v27PTbQN%2BD9ByanvzJXdYUfQwrJ9AjZGWZ6wtkhOuySr6Z6PRJOOqdgLwxFtf17qGr3W%2FaES8eSPYLtvTkQFlWqLUEf3yPC1CEZzMKkmIVbcOXJ9UCkvVhebW9PMBiQfP6CtmiTYoAb47UVUcREUSXmirxwt6r3Zzkg8rD3rcz%2FHsTvBYcq5bMF4WG7omhQcFxwtpbdNdhoMZ%2B6MM8Dn6xfHOlANRllHFSW2T%2BBjndc2Nl1b5DEbPqV5LtaLCGZ%2B9rWQzxil6WSVLEvDc83LfvLkcdraSgLdslUUpWJv0ZrGtEHARCvZKnRX0wkt%2F2vAY6pgEpVXQ8Pupz9PT06sIDHn%2FUhZ0LpVfClavQGYpHd22fou1fCFeXxpPAcVKCUpKMHUSb9XvIB5gzVzPCIFLSTKMQMV0PkPt%2FVkzqMTN9yxxEbT%2BrmqSmz%2Fwe7ycwsBDLETWvjm%2BVn0OFIzjEdo%2Ff9kLgPqPHTINXDAMv4SKFin8mrWbxl4Xi2YijE06yXrSZbNQe%2BPvWL5z8h1ZxS812j6L7KnXvhHtl&X-Amz-Signature=e558a79fbbf0ef47632ff39776dca1c8b5612fa6c6ee755b40e659c40425c723&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
