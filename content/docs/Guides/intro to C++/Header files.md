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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3LPJFZG%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T170757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQD94Tpe1rLn0BoLy6VztPVNh1qWNejoSyttPUgbTzSYhgIgR5yVutlsSrRwxsyRzYmV7hmj0OrPpv%2FnW3rdLL%2Bptagq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDIz49oePmuBmY%2BJTjSrcAyvaifhRlV4OOrO1jTHZMSI44GQCksK7KgH8%2B5Eb9m8MnkaBZcG6F%2Bs3cizilUeWxXxHXcm9a9ALc1jKNtcwdK6KAxkh2PCIN%2FJGK7cKgRfcs%2BgPJ0FMOPvViAaD938kaJr7yCgOYId008ut990nd3xWWnAyULWNJxcUzND30fZs31USHl7R6nsGVGzIhRiv7NUvF4%2B099ewQVR9IWlRfbmB4pkLTn2nFFQlKuB6CvSUvdnL6rNHwYBUZAXfxMAtuykhDOGnNNMmYSrOLN0ZNCiHo73dRcq18xRMEY4sdQGUebMKIGooG9%2FJQnDp87xmXIkaqooCW%2Fz37oloJ2RNkEeipGfosRl2Iqw%2Faq28Jx2SY2dFT8GsYsO0d61SXUPxVxZbX8cS4seEpxuL%2Bq00M7aaQeLJsZ9QTglmS0YUl29uCWhSQnOV7tpNPkktMHDW3B%2FGlFUHeILe1LUol3RYnax2haod6L8qvPQl%2FfoYXPkbpFOpp%2B3MqraSa%2F%2FJzGAjYdjhtf7m%2BY1XoD5EU%2FHeEi%2Bgk1s1hYFL9vladsILEaIu1aDAtN9mg%2BGkS3NH8YY7zw2Ts%2B%2BWlUDLMAQfx8iU4YGuJJeLiiFRwVjeakkKRPyShCYGMf84SwUZWrOkMPCXscIGOqUBGBRhU7ijQSLcq9rERmcUNQKjTqvuGt%2BhG%2F6MH4S%2FKs0ZZX01kmt%2BbZOTu%2BEnPzqgYen0kxNqpQtzWS1SV5IuyM6fLKn69aVIVGUoae3yzIFqJQ2u5hpBDcEMUL%2FyAfpDmqaPrrJaaVwg4piQUUKMB%2Ft4Jh%2BAfVESmTToQDxD85mObAqlJnUuJB0Gu8HKwH7gjEXlkiDz6GqxnebeLYlW1WmYRRgQ&X-Amz-Signature=9edcd8109ab9c1934c6c33de74eb2936dd0ff23b6ab0fa8c92685a057b12db9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
