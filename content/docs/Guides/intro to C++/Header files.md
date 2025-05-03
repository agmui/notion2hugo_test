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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YI2K7ESL%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T160849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIGs%2FoCQVvROdlMdopZOTsR76CCjAT6VbeFSP4upbRQTTAiEAlkmcID8XkMM5oLtT8awJ0uQ3TfBzFyOJ3NUiIcJDxlcqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKZ8ATmlgLFIHaXgrCrcA5UlvvVLfPg%2FP4hkMxg%2FCctlOtREbuAKbeA7yZV9d34M600k3ud3hK%2F9T%2FRtIXtT%2Bird9ESn6XLQ4TgTfYIJg6ay4s%2BHvKkmpCfYtJxMvhuEV92RxkKdlBJEshTSGTvQXP9TUXkbNmDFzJOyvUOCfbS9VU4blqjxTJBOX3Je80UJ7Yu7CEho2sc72Nl5OummTIg4PdbdfP5hBdsundfMO9z%2F1nLuRNMqR0QRhhIjnjons8jiFuK39JLkH%2F%2F2n2LlV%2F4UI00Ts6%2B2hsCOkq4l2lN2hy0ZDaTeLx0T5%2BMUg2rQqucAAP%2BKLcP8x1HIao92wEbqOuI5wVN29DAwvyTs7RY%2BVqViuXqDUOrRF79r9WwK0i6iUEqWEszTfvsjnxcZ%2BU60ILDGCrwSbi2VdM3YZpHS%2FLu8EbFTHlCvVSWXLXSB6dF%2FhnQoarkC1yUe6j2lBp2EvHIIEGfhKSTDcciun4Ni0LXlMKxg2kJDQLnBrkJIfNRiOm7KiTwhltGKrX%2BKFcw9DYgk9Guh5BTZrScxsDO%2FHALDgSOlxyEefegjG4uq4v4tasrXVl9ccUW4%2FyoXChMZ%2BSePZ8qyXZVlLWUtaUWzD2%2FsL%2BDZmisVqSSNE5iGXbWY9wklfk7GekGQMKje18AGOqUBNMk%2FODJCyQMJ3XsZRlF1qLjzNJ6auCMxab6nc9LznbyxAK7LQ9bKD7Bl78eFgztRuKZw8A2TetM%2BjytpaXwNZnS4fVNGOGSmhLJh%2BDFXk679T9N3WawusU8lnOdfBDWzdz%2BZjhMI2o2w7B7L6AzgOaqN0sXFdoNt0PbRCYHLB%2FnFMMSWw1fCpSzOg34%2Fb5hd8hhO9xkRLs2B4DNSn2yhW164v12q&X-Amz-Signature=7288e82faba3392d5bb290e309e3c4b60bbf30a905933254f0ff4251e45365a3&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
