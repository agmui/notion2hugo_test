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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665S2LLUM3%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T081043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFgyMm5HtILEmVt%2F%2Fil0qCwWGFxOFtmcZ%2FY%2FBaKdi2g2AiEA%2BdYW05crsCnYqefjbqQUdatUMKPp4iVz%2Fe%2BkALqps7oq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDCiKWFJk01TCf2a6NCrcA3vOaPGtfVqrgHO4mAicweYlBvnGAvfSnKozu5QFlqkg5HASLqbM7YJz%2F2o%2F9psVRxTFe2dEPWmVcG2MOBt9jUZSa0KzrqtP2A0D%2BaAIKkQPZqxkkxyOUsPev%2B%2FaOhami9r9vquYCaM3GolxLIqhtu7SmNxHRXNLJupvlDUbN%2Fq%2B2r1zVpTFV6j2C5m58SB0qVahV5iG%2FRI4N2E3FmEbtcUb2O4nTdU%2Fdz%2B8GXTG1MxmlTSNWT%2BgW0ss9EA22hpSf16GzKsvT9%2FSSvioIZ645xZk%2FmwRf%2BvqUe86mfaw5mDN%2F8%2BOmHhPaExaDA%2Bm6xzEOp10aSy%2F4XDJXQCGPhtUeiCtyvHBqli8U51s%2Bz4iGMrTAz1ccRx7eg7nhVuuiE4V0NuK1p6lMt56KVZZIEm%2BefcvXd1l7i8UvoLsY58J0SVXhg392hrE4oti648JpuXrUm4k6Niy%2FbAjmDdZ7VX7QcrWjYTkHe8W%2FQ6Vs0A4zrzo5SP0SursYc4Xa4BAJwJNxBRz%2BIGGwAaPgZU8sfvZAv9mXVEZLgRROwhJqFc2%2BPmUIgcsUXP2kTN5O1SxcQXQzwk2J8EmBK9CAIe6p9u307ErULh6w35lWzsB9dBsa%2BkbSBHnMWi3iyS2tAjQMKfKtr0GOqUBmMAF8gU4mfp%2FtEGDZHbbBnDYYCRCfuMtGctxJOrLchRyX02JQt4lvsQNw%2FWzVJUDCxD%2BAi9zmB0VLUm%2BoPhZCol6%2FnJLdhsB6SmJYIVIWo5AN%2Fhhinz6P%2FMqPdJMB6BaozPJdaKSoa1O805B9YsIhFQuF0IfsoLgePFtpR3WpwlfkMEjd7ZzJthWca1KmS7R%2Ft2GC3U03JnhEw8iLr8OJrbhzuF1&X-Amz-Signature=6c56ef029d7a8a100ffaf2a79dbbcdd6ec3fe1af7dd0ef0c26e2ab8807d5a779&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
