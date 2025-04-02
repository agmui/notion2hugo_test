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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QNSDI36%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T200902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQCAv9d2r2oUhJMmsujsnC7RFUFK4pk44Ek1JLUt6RUDxgIhALcepQbuDdnzKzwFIUvP1xOsHjrAzpGwlWTMHlf7BKdcKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz6IBZQ3LuLEo%2FOKH0q3APymMH3r%2B563dAgWv3jITTfdlZKDgRbmVfOW5M707Li0Bvjj6M8JiDtJzf%2FO7Zr3m89oXKjbnnIV6XcyjY10hiUPApbJwRr7Q0aA28VoZiVPpikqdzFTpAY3F9B8nIBlLtmMDvKQsKorqhwFIkgpevixuYaS0eMdJdVoZuLWOWcDex4XvYHlZmpdeWv8laPZ7IBwXGgjpUUGP7kLLMtroUSpQKzkhiZTf5vq0jTEmBdexkOcLfaOfgQet4Bz3zyLOgVEHQM7lTrX%2BqlTwjeOo3aHmIxRq7rGF7zwXfvWeFzd8lExpfUonsZ5vfF6kKBkUWMLMeHIreJuMYQCtRoG8N0WXHmazSTWpkWkBQWcFL0PA4mC4qT5jSER9Z%2FTi99hzVxOY4qa87Y%2BUNY9DGPTTqRTLJ4y99wQG3kxErrcPIU48fwlOSaKfnypw037wtbvqRG7hYLcbO0Z5%2BKJdGmfKqPT3IGv2KtsixVnFqkwmavLPRII%2FdEU4CDbctqCydBff1cT8SQsYldIicPPtTJeTIImNzkOy37mChXEHLvRcQFOG9qledegSG0Nb80ZWaRgWls4ZDdbtGef9%2Fh2KBnxBn%2F1YGuAO3OufFoft8tf4ZIDO9rhwntNd4tTR0XgzD8pLa%2FBjqkAVs3oRFLLLyg%2FFuxNGCWFXWe79rOifKcB1vrzsDbcvAGcaDuRrM0HIG4BI2V1x0fsplldFRZlWav8UpM5KT3EbtRy0Suhkl6al4q%2BpIgi3YL5oQRCXNeGRkkyMpvJ7%2BY25WEO0Ok0s0Seeiitg1pLMF6NPFumrvmQeV1Pu4lRHYqJOBGCXWrZwJHOYPznWTJkW4bDeeDQSEHptMiJl%2Frco9vTljz&X-Amz-Signature=b2b638cafdad48077d7bed93488224c12474e12af87312d7fbe9f32643dba2dd&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
