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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKF77RK7%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T003700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIEC1Ry7p8bxUTCt7IppVVyzH8Xmdb7naWfbOVvjXGkYaAiEArq7ElbnenE%2FAsRBnmObvBz3%2FypG4QBghBuGmdljwhlwq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDDNKZ2%2FvDJGs16nCiCrcAzaKJm7dFVbHGro4mnhdAJhFc6QUfkPpa5khWg9lCtlDJwmYKCl8imWC%2BsH5iadxpQOdAynDWYGonsQIB4DYC7PCckOJtMcCFo5w2tXhz9pUQ8k1ugM01doL7vA8JpqNB4yGJpaBmlO0MGrk0ECAGJxjY13YHL9ATtJgrUUqkqLkjnmBizzzWYAA9n49YkIFtn25g3bRB4BnGlT4Bo5Es8JBrhLSC%2F7fLRNDr4lpIlFhmDoOdHUaj0gXpfSxHzZvoGcudRP3eKvN24cNuBIoYQfE0bFSXDJ9Gj7YaFrKE1i8l%2BAk5spQXU4XyY2%2B8dg1UZWs9JA3stfPnEqRjt5cfLpFtMPswdmJODE7nuZbj535RGgQkYcTEIXnrRkTGUY6HrtE%2F8%2BdsN9194xensPV0Ph29o%2BHezNixCSB0tNUryjBuYxkkdNAGnuTw%2BHdeNLYw1Gl7ib1Ersl51Ijw2P1E%2F3G%2B5WUN4rzl6lYpOq0DloldxOgAevYRUPgNTEz8FsRgVjpBBs5SLqV8xyWoUc8qgMdMHtliGw5ji0gAJhJqHQYFwUvGWAi9%2FioyXkOtyaziS84T3pN0macb5mW5njYm9kxW46FiMqcQGZmo%2BtnGmwuMahe58fIDgwDYou%2FMIjY%2Fr0GOqUB2rnhUc8f2FONGEaspvmRw0k1ZhJGK%2FmAqP5fRFzSotXhCbNZNJh91SEMAUcoygSWH77PRF2XV3g%2BUDyhCk4xmEe8X5MfSnF9jDhKlRrpdZPk9v0Cqc72rD6Qn%2FLHnyN%2B1grnnRZaZ0fmC%2BQdLdiZNNMrbc%2BBGwb62YxtXbzS6O%2FS%2FS4HbNKIC9DP77JvIzi5rNP50NmBNvZowj6mUuP8jJksKDz9&X-Amz-Signature=8c7b5eb7c8befadf8756c6436e807bba10244953c3f37694ed16329be2ccea50&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
