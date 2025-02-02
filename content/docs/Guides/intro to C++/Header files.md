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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBEC6SCY%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T160658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHJ4P6ecQ6lBt7WPgNctjFGv8O5nQOTim9bp9qx2KuhDAiEA%2FLIDD5aPfzWlrD2R0zRaTiZ%2BmjL%2B75Dow7%2Fm3w6uaM8qiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN6i6xuq31%2B7sdOwhCrcA%2BhLIikrlGR70aR3ot2S8T2TjqprpEpALzkjQiajJMp7wLdPpmMmacr7IbES8IgzVX3859LyugS%2Baq51o0wvr0h0HjJKieiNdpyM6MLXs%2Fn6OU8SSSIM40vr4T3fuDJFigc7xQ9oJgQ9i3oj%2F7Gtmcq5YiL8g6mdcDTY2HmVUP4nwJU6OwcVPr%2F8f7BCVpoyh8YB5KMqIm6r61NsKv2ikNfynCF7rV%2BBcE42a8FWgxJWqNTkU33dRh6fhhXdFK%2BlgAsb0pH5kLeKih6HBQZHOKquQfURvALVT%2FdO6qmK0IR3f1Jm70UgEE%2BqZvkQwW3i%2BFhckfNLEwHaLAfr4G74Tq%2F2WCYUXLcsGaTRSmwJJquVJOTHpMsUTOz1O9sw4rJa%2F6WKLWENLlUEjlTGypnnDUOwZA823IW3ZOTl5jClvczWQodY9eOhxVFHhtIze9sQBzA8w0PHhIi8zAstq0wQZsKviyzrYs2K4hxEFspTyWqvV97xLEhW31J1gJFj%2FSCTQW6OiL%2FOZFvTskzmotfs2NQcNxwa1gf1Fi%2Flnr%2FlGOwYBZJ9QgATFnk9Ln5EMFLCMrIDhRiEpGyY9XEv0wTRy2shauHbvtE7pinvn%2BoywXfywH2WwFReejMZlEikMLe4%2FbwGOqUBcW9RUDkQusUGGMIoZe0SpJUO66fT0hf8xXsdAl3X56pGqfE2U9HZQkeBeSvCBUSg%2B%2B0y8g2tGRsvyQ59laYH2zn8%2FCXGqgWlvEmtalJsww425A6B7CCAxfaVQmDpbUaYApF9zWwh3rQ6RH0wlabNTUhmho%2BdBZVUZdbCSncy%2F%2FI7JqWLDmVW057ur9tRA%2B4yAwNo9VtLYfJ4chM2W3ASDJ%2Fr%2BQ2H&X-Amz-Signature=5e05dcb5dd4b0eaed09b30f8ea248013f8532938234cc81122dc116be9bec50e&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
