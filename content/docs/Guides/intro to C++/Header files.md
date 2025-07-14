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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TO6NT3ZD%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T071408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQCE%2BSDw76hCzPn2nHcRZYC2zNp%2F23SLKpFZNKSuJQWo4QIgTvpugjHk3Y4zdzUebjlBSIZR0Z8HKIxAutHnD3SxPd8q%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDLvLaUdk6dJLEIgg%2FCrcA6Sn4cKrqLFqlQM1FCU8QZ%2FN9jWH4HufbqQxgX6KNXxOdPL3ZqazqvlU1OY2%2FkdhHHMlJyF3zIrtq0kI7X1gNsnG1gogXPzSPtCWHNOe9LoIHB71xezfVVSx2fbaA%2Fk%2BKaKZ6o6aZ8clQst%2F0gIQzxMykUIf8PQadaaOoUiEb%2B4wsz3bED4bPuK3BaseP1c%2FX971FhFBy0ou4dONvNW8knVeh6IW264ODejooE1pgCBC1FoI4v8Ce%2FSJ3oOGF52AHMBPxV7z8qthNnZq5ycZqLpSSpwOhg3VscxLL3y93hVsy1BMuLMTl42BzC9r3kzPi%2BPLFC2vSlmFIlsbimmQA73pbpxvWkSdmXMTOq1zeo6k7VTpKEdewZgKmOnPR9JKj7m8I8Rguqx7A%2B8qZO3B1STClpS0RPPinKYuLmtJzTMkFkIprF76Wywxg0llYV1kmJ4zHRmoxnyvq8cFQD55ut8lxZFnkYoiB5yhyXj%2FXuLuH9ddBqlTDEjYGxb%2FOO8iLkmpWqUZKD06GU1yYA2dO6CC395kxk3li%2Bsu%2FNyKgaleQt1M0Y4hkHn3JSA5iau8UblmXxGkzjH6otesCrZ490b1rh3GmO3RAuDSQg9NIHfPHmNoF%2FDw%2B0YfS11jMPGw0sMGOqUByoP2XijX2e5C73dlsi18Z8sF5oOHiUnOfA9mtta5isyvYLSM1sWsD27d8glk79LeHBJ%2BeUi4sz%2FbhwseVIImnAclDUJ551TFno%2FNbC%2BxePLpO5b6dsmqN5dHWIDLJKv1jwgSzZoFMpGskjNbRo2j%2BOQqLVydAwtYWzcVtqsQIZ8nwMSZk3iJTnLmsjVoyWmq4d9kW%2BiLGu7iHSx38LeSrPpo%2BRyY&X-Amz-Signature=525b51b953fa20bc0f72b4746e8fea7138fdd08763cbaf2742064faa9d623d36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
