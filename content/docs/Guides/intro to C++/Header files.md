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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663V2OORSB%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T181049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQDBKctlCPf%2B0XC9p24EyHfahUuLDwnmSrDMeEV6%2FrCpdwIhALbvmyuUWyVwFVHiP4AuImxi3EUSyvG0CT%2F1OxDT7qynKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQQymwoCVMrfqlelUq3APZACBD3mvW%2BF0lyb5zIyv%2Bgpoie7N8h3ZZLRKQDjorzKdoB%2FJOZpsm%2BkfrTTI3zhvA6bWjTrUZIr5d9ZcdxxmepQz1xvkRmZzG%2FgZFkybQTzVo61kTJqLlmDlF0Fq1%2FcurWJkwFpHOI0%2Fx%2F84BJ%2FVBM2ZgBPvmv1L%2BM4E27Wd%2BSNXRDs7rFBUavtn28O4lbJGU6iVEQ%2BquMUMD5F1U3TfACgyGOW6p5%2BNQmXRuW3EfJl6LfYBpdXhT00X7potVNisbUdJOnk7Vow3BgId3RvwJIUBYJGCGh%2B%2BWQuB%2B3Ar6pSs8zqyE7a1AdDWWi5MEy9iPmQewEaEX6jSkxjUAfE6XEBuI%2FuJMheD5tOVUzYb6A1ATXsqenL1Ojm%2FDKeK9mEN8xK3lrZgzbhDYSAt0GrFui%2B%2F1LfUif6OPPo%2F7CwR2BrcOJO3YhP49JFbMeML5rrcWdtz0bqXfcQ8cXHG%2FAUPg8VYWUWDykhlUfVevHHsgQumYV0KZdIXoEu8QQWqnI4y3%2FJ6SG8IO8boYtGVGC5HqrNZ%2BQUNQrkp38p0jIpexNg5vK5iTcSwSisFtU9VGw21RsiRS9Jddw%2Bb5j%2BIoUrJJLGczgQ6blOcV61dh0GvW35ne9Vev7f0v%2Bn%2FtujC37Ie%2BBjqkAWSDHAo%2FTlG44KgWBNfi7HqTdZUJhajs7vJr9itWU1FFhJpNeBkSakKoIWMo1yUxGbkpyfp4hQviTjlUwebUzOqDGsOd4pjxy2kWSGUtjncO6DkJCZ%2F0w7ihAeivuxbQVKBPy9D4D03GbpTOzgEcM9oLmk8AUxng1UnYsCyd%2Fa3WKyCqlAb1PX7voBUF0WFhGomsBpM0a54qGBNbrUVcz3Tu8FnA&X-Amz-Signature=631ef4bde42781bef4207158afa96cd5c7825302d01908e30eabfdc1e88174d8&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
