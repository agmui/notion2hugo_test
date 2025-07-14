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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYKBB7US%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T151026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIGtZmPylKZJS21BuQJ1y3pOxvnA9dlRf33MCiuNn7BGoAiAW%2FlPU%2BnnnxkWgHd0oHkrkXXffVp47eQEsvH3X8d32bir%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMYa0Od%2Fr9WUBFhWS4KtwDsVi4O%2Bkj3viWi2Aqkln5QILfFdGZ1%2BI4f11L2HFwj5U%2FEE6k%2FicKVA7YKDGnXvRNHrzXVvduDjsq5KXZgVp97Y8qtt83wc7K5YNnmi0kTIVeKNFa01JrejkAIUaBDLpFTRrmWkyv7g1BYwYiqr%2B7RiEQ4OlZoHzk4b9fmjKBTxEqVo9BB62RZUHEMZ7ImQ3uJ1YpZ7ouz2lI2VEg3e9dPTNAXLisZuDzSqI1te8%2BMVh56k6V4Dg%2Bj0EzLz95Jh9or%2BE8K1%2FmXD9hl1ReaTyUawzw%2BaYjxkpa%2F3Ntx4O1ZpdxnTLG3rDb0GLpb9EL%2FsxvHxAJTGt4y11lAqp5rwY371IPuxWoUqRdrWaCFhAYYFOkmtw5u2XrJkYL435B%2B6f6MUd145fyCt%2BXP3LZkCvhgliQuMmxIEXcmSM2eeloyY%2BYztBjG798dCW4M8AAcKUE0r2KVIeWV3PQXI1IXj4ZVzMqiD7uMnQZLrcILbNVur1zM8tAfSFPKq6kvEz7NvOhJCmG68UxLo4iXNufANJEDeOIwKqhnIS4bNN%2B3NreuXXYKvDOu%2F%2B2WIgy6DUGdm5gEoXbh%2BjRhKlJtz%2FdzEhPCUCVrh9y2IYyhIgQcRYJo4i%2B0Gzzg%2BsvW%2BM82SIw24TUwwY6pgGtfhhvtA2ZQFe4KHMkUlybUAsVrbvCx0UXqQG2mI%2FswEuyvtjVw4y1JRRLUIsrL%2FWO4tjaZsQ30mJOJRYxThB%2Betmhy6tqRJKooIjqvMjHytFysM4eq05RPlRkzLT5tXm8cH6PbVKWVlN9qCHMMeHlbQ3Fq9PktJVGv09YE2ZOUiyzTrUzKG666Z0MRkglPED5%2Bxgt3i%2B0gclVY6z7JQd0YViuz%2FKi&X-Amz-Signature=a08aa39072129e7826ea54c5f058c7fbd9b18a6fcb18618f8f11471db38fe66f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
