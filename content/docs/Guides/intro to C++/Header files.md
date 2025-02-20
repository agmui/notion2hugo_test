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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZYGEDZY%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T100825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkZLLdUE9oT6WF0GnsXnvJHDzKUW4vq9SmHDgQ0E%2FvIAIgSucF%2BI2A75xWO%2B1qq8OuXEiaMWOTSD1ZJp2e9h7pto4qiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFqAebdWeOOAN8F3eircA%2BSefRl8QteyXA3R4ss%2BMQzEOLHYE1W74NU7gAjTcRrDU7r7E0CuEXlIMo3zdL0S79AmAWumd1cQfg%2FCXTkXFSaWXP0dUGlgJ7vvarR41e8Z%2FdFlYSysBnBhFn2AreQWoStjYTah2f2fktvSIp2thzQiG4UPPXma1QQF0%2BoVFFkAccpcH%2FB7MLxrX4Wx9L3xB1OeRTtb9fUX3IxkunEG%2F%2BV6g0CU%2ByPLl64NOD%2B0sknNTV%2B4a434vap0yhwPL%2B%2Ftqw3c26cFqGlQwr84%2FGt%2FFRKfOU%2FoZ1GjSIuYxLeAPUTMNR6RdAYIRaVQFf8r6MPisVdBMp6hQcDDHJs4VQZcpuk2yzvG3THzaFIjRSnRl6GaFT8U3YXATQMRU4xHq%2BJstypsFl7w9aH%2F6vEVKj4ycYTfrbOpMzpPRqniIOE8DvUvjZBXgPzGHIJmolLAwqmafwM79xV9AAjKj1EfoB6oGK%2FBumsQ1EhhNfa4OWg4uqpDr8a6cnjYoYTle5JuSrQhesIU4QL0cCtm1li6dcSXo%2FXLEtcmz670mvnFeeahLJidK%2ByBbBqOD578%2FWavyJmSORDBtzdw3Q7%2BOsdIMBbGAq74I4WlWzbCA%2FyanqLzk3fIz9Jvf%2Fhx5BsZi6fhMLLh270GOqUBuYNtmmsxi3%2Fwx6B2ID3MHjUB%2Bfc5DRa3v3G0YOo5bDOOP%2FJ%2F%2BRhfIhfHR8L6UdmVyYmJWBpvNaF1pq9o%2BLpO7zmNIzcxcfU8htShCMk1zszcqK5KHM%2BNNzETmKFW7zAyl2o1ykpXnhE2MzqKHjQwSlQfJKh%2Btk4ss63b61y9T4z%2FGqZD31YuykzKtuXv%2BkYp%2BaFH5u%2BfSKukUWonba2Sdz%2BToGe%2F&X-Amz-Signature=d38821dfc15ff91bdad46592e1f477028b4df4d2e86d44f053c35e9690779d5d&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
