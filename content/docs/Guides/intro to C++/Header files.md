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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CR7C363%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T031841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIDJhpcQWh4mzTssGZuKsUtxJjlq4tZAO7BsfXrikPtsGAiEA6bmuOj4SCRhgoH9YoZli3DN1d%2Fqh7KATV7v6l6semzcqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH9WzWw3O2wuTbBk0ircA%2BoOs0PC%2FzZmlraRXKBi2GUmREutaaQMUZsjRRK85wMm%2FVwJIFDdGR6PuqjwNQcV3uhd8sSr7pHePh7Xsa7%2F6PzBmwr%2Bq2WqSVZd2As9usS00uyMx%2BBpsqdNwnDkU8bkK3xifcXyndgz4elomf6TDBH95s%2BIsKK1AE8S9%2FknRAGRU2EepaKAkDUNxJ42V2FYGeOfgJRSCyapLOWQyEWIADw897uIpYLX7jlbGrOo4fJUN1vNHZfBFoKIdo7RSpfQUy0vjdfSqBEhKoz5ZDy1wvWAiPJ%2FffVI7np6%2BOC82AKYFiOoN%2FQotmxZmIrnWnuhv2ebc7x%2BYSiK3yGeDIX9X5w0NjnIZw1kSHW%2Fux%2BJ5mSfzwcgYhP5c%2BzNBkI79IQ8IocV2MglcX7Tv6j7xCAK1aKmB9Wq4qJ1wkGGXRaOsVtoLmm29fNdWdRNUREG%2BI1pW7MkhXFO1G0Aga5tbK9iKhWz72q9k%2FK3E0zrloRYndg6k0%2BwEut8JCBpBAbp0q0XaTj%2BlFXMs95iqAd4OeYxE8Fih%2FlZbtvLty%2FbPFQy%2Fy%2Berpz3HnDh4nEhWlCIayxiJVvI23LJl59l%2BPfJRfYxPLu2docEmVDrRdmrcbLURFm7ABZ94L0E%2Fd5NFIAtMPD1jr4GOqUBhJzYSQwzpKzOICTgOlmi5mrIFkV2Z9vkxwgzemv66g%2B0LUYFUcxVwcsn51rnNJrUWmWQjSVaw11b089XShe%2BU1%2FMWx9brdFws5VTFxS0PfkGvErBZo60V%2Fb5x4p%2F5ahEjJ0FZyiPhJykR6ci8BOwi6R%2BIT9%2FGzLrKArvrgqixT3t1cy7JJiyF2W9i75EJ97Zqf6hynkpTBVB0nlJA%2BmfH8iHe32A&X-Amz-Signature=600fffaee8711fd1921d6c7412f1684d3290e8538bc5aac4e02a9f1f5dbca92a&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
