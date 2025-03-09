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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ME5RNVN%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T100206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCIBP7ouzdx2yaaR2ZRz0yALTqDUn69rIwtQ2gGgm%2FJCVGAiBaGHCAZaENaffAlORhEevlr8J1emMDt%2Fy07DyOIySv1Sr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMAJIkiDxs5sN88oEEKtwDUDEsIjfPAhtyijSRfumxjRGRB%2F9baX%2BGY4m4ATakAB2TjXUXnRwHRrKkbgEFPRabB0a37JPdyJEUBGljNlfQefMq6eJkRfP4553%2BWq4Mp4ec1YNNuf0Qz8AwbNjg%2FsviiKpTdygFZMvnfaVudSxzsV5yiCVUzz07tditUVSB0m8gUw9%2FyiCZUmyprGwL5iqL7CVawCz3SloiUz7Z%2BzoymmFXBOVJViBAkf7jh%2FT14OzjzSvAb8nv%2F5fRTRaKmkLb8WkK2UisjeA1HNrKR31kJETZnFNZaEIFUVAo1xveb9epLGsfy4MM35TVeCT4F67oFOlVegIGeukTdVigfEHxdMMspTs8MdT%2FqbSQGZiCjj6JJdbKOym3hSvq%2BqZgtpBJ7xrdh4vqCrJZHUPObzaAFjXN0ebzwGDhDnyqOfyRYqQYQvoprqKVhB0e%2BLBJ4SP1wJSrjum9ljlhF1BLRVAd%2B8HEblE5lwWbQtx7VbXdZAv5Rf9hoZvsNJu5WPmfgZYiXkGMpJq7ua2PFHh%2F4isJ5xdu3ITpeWGcCCO%2FE3uoljgx7kxA%2FPJLkvbsPdzLDGTFLV9Ywmcvihq8O2j%2FNMr%2FygtH3BdFgntbqjWF9nQUjvYmqDh6om79HpKo31Uwp%2Bu0vgY6pgHYKTfTb0AEcKhIiOrADoZSRVx%2Fbs4e1zULm%2FC%2B5CExbHWHU9npGeSymhTRpiiXo0ZbI8%2FEEMkcEgMEkkgqanDNeYloOLIGuV5e254NoPwFzPiurik5KpYBWsJOVZ04rxHDvlXpR88UZP4mr3JI%2B50%2BwXmLcmb751LbFecVo0IUgeGxRxHRlzZgKhH9OSe11ov163JBT%2F5omh6RpXRA2SZj6ELUuNXw&X-Amz-Signature=a0e1db475a094b5c76f7eae651a7b9ef134ac39c1f8de6bcba91bcfe7863454e&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
