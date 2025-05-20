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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPORM756%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T220814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5ajvTlZBQqHxQncqdGowlND302uKMN6wOzpiyYRJ7hwIhALUpMZyGbmWWIEOHmlY4EVpM7ZEnL8yr%2BaAdGjWDKG10KogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz7TuANnhMdAOoOfycq3AM4pt7DbIpyRhL%2FChmNE2fXIkdW%2FwvCpgvgFYVjWuINhpWV0bmVEf2SPryHka7X8LIDbkDfUSpTaYhP51vXaguEvxQDDbGl3IbjYfisztHsLYyaTO3xz86dgsBL1s319OTTsyIxaDEzjFcvdnxNE5u50KKvnHD0wOqmuYQEgtBMo0DRnCg8yyB3N5fGlGvx3PNE13rpmdWLvcPFR%2B1VWFVvJzTmyBoO0kA1twzftTjP92cNpzpt8tqksfGKUISDaviNBD0dLTeeF%2B1xpknCud08J2lPKZLLQDlth7xGfTTnB3ZKFipHK4LY2b%2FQCeuf9X5gRgPJieNKf7nU4EH2EK0z%2FXrCN%2Fqu4JiKHwhpAuGluAarP9bF8w7VdSAN%2FYj6%2B%2B4uMDav1EF30spuiCyVXqguyx0mV06Y%2B3Ldn71%2FTt2285kif2mYQ13eIQkuUWry2mCVU%2FLhBuk0xnU4VJopEz2nNIERozLsvAQtIjpewQ9NVbkQcNkTiUUi0RgBxZJTZ8QmS5MEZF4u9gIb01q4UNatsiQyYrHBrizMNJ8RZGNCyRvR1sUm5OKlOOwB8y9W1JM4pqnb6p0oMrlgHGCUxO7UTCfnH0VZdWsA1OA58JxNof5Iyyl6d1g%2BoVFEijC7y7PBBjqkATkmv%2Bd3kJJQh20NxacqCKfLwngk%2BfXjWRaqRz2x8bL5S9S%2FOl3opX6o7Y3P4rSH3KLHA7vjDYkCpylSsCg00fg9qQBGglAEzqWEDP7Xx69Kqd7orI2SeS5Npatj0bGYgSfWH9TMaxTxTuHeh0oH%2Fcjs9mE4ZwOkz%2BR3HjLbggEmvWAjE5GAvbSk%2FjKlX%2BluzCLFc6x5Ql8xwieFyHLeolLxdL5O&X-Amz-Signature=a319d5533245242f92cf1c1b1284b10401d43eefb23a3a4263b187b60c620aa8&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
