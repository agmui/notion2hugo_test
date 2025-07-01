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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MC3Z66M%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T110805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD07YjTbIhw2AAbe%2Fu4YAwtIom3X4s8qkkHNsAvlDHGCwIhAIA68nkTK2GgZmgcFj0MhTIZawcYMkA38DQe7BzWxSS5KogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwl87TjaUq9s4XZgsgq3AOL7npJGTBXpySZsDm%2F388vh80l1HBMtwkTwZfmJyqi7rOC1H0nwUrpOmQX%2Fe0%2B4jHcDGmCQtGcXmjwVULFY%2BneByD7ejhgXsHyw401SwBidHWN8VKOte%2FsfGv2rPMCdRG8NGUdAsz2t7BkdLlCo8SNkA6MLdtdeWMGJ%2FnBrbjot%2FsBTXb5WLOqz%2FaUqeVyK5wRj40BapJWq7x6hdskVMCOHL8K8r9GINXhwpBGmSLyjdwTEEVejc%2Fc5uJn5BeSJrZxvglqxDIvRa1gbdHGunQGRHJ6gPOUZVvwqTKDgc1V5XRH9PSmgqhkF71mu%2Bl9%2FPyzpsnI3CzlYQEE%2BS1SpxgvTktxxSAOEabyk4NinTVrda8YsPvSBmf9jGpsJiOI8dOaXZKuvjEqB0Kop6FinhVQO%2Bq35f9CTF1qTGOWQLeFbvlSSYKDM7Uor%2Fz0PzElMxlD8DesVFMy9Dog8J1nlrALEKY6pZXY1PRQ7k%2FZrF2FvucZOSb5m93IgEo5S9Yf5X7cVvxxseZHXT3K0YN8mLk1mc5nHfnddqaehw6c8gZ6jTJ8EugJgFxNSJAgWMzDRUB46e89D4YtLXDArqRDNtKmwBVMSr6xMdZs%2B6m2JpEgriuz3qFZmIwqmFUPFDCSz47DBjqkAWHEs3f3EMLJNIU8SiuOOIiOx%2F3zKTAEfflw69OEGIYEZ82XLv01hmUqplibyke1LJ0NHWKbY781d9%2FuGOWRELGcGPfkKMuBqGnxkcTWfpciywoprzfHJ%2Fy1zHuc5MlUuchl6ktjnJcxx3%2FzjqYB0crJkHT1bnLqCgA%2Fz49Su3ySznug7T5T4bydgTj%2FcTgSEMZ5s0DUhTqWVAgyS86fupNdCUtn&X-Amz-Signature=0b737c89d9f0fbd2d18ab2c4e810cdb00a0ac5c52e799a27048feca1ebbc692c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
