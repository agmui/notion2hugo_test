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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXGBZIMW%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T200911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG%2BoCrvxJEB85B0V%2BzVIBqRgQzrBkn8CafyHcOcsZmHjAiEAqcUEa5I5BAJ7IQO5PyTEvvy6f1wefYMfK6ju6ZWhSGkq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDJsaxqgnBJW9PK0grircAxcS9R7Uvb0HkiKBkaPdWWBnbiOjsbTjsM7qd8gZHKm38ke%2BgYRCIrdVqCER7hTVVZarmKhlTwwe0WakZ%2FnAd5oHSiDMIy9UgY4GjgupoHGzAzJ9TpH%2BwtQFBmuxUz2WOqN%2BMx8W0VXiI%2FROKhMCmKtcvD1gDwU%2BBetl0crAMhC4V36iXYlcYAO6PtxL%2BUr%2FUz1j4u2LMkBw8y2zrpI8dn49ai8NXTqSdYQHXEek9chHLzBf%2B%2BVytgEbLphxTSrtNGoCw6A5fouBgEg1M3CNNyecIOY%2FXuq7hhDS0nHF1idrwHQHt8g%2Bo%2B9%2BBVvn2O%2Bf3TMTtzqUYOQhdQp1lsoJ5%2ByXyUVM7oDBxcBpdAK4M4Qie1CNpH%2FoEe0TRUoAjAqtA4cuHLz46hrc%2BnpEjtSn1IOOPbh%2F8Eq9gxRnSosL3GyG96LeRxmqW1JrND46kiMnArKXP%2FijNotGewoaXNXsSKwjvHM%2FIBlgakV51rUwRioJ1S%2Fus8bnS1zlq4YFAnkCyXasfCCvH4hbdFqFKtztt8P5hGxYLwXRt%2Foq0ofZMwxwJS%2BR7jUu21xHPUkSbdaNCHQc38pUJkUC20yQs%2BmbyFPzFnOTq%2FVk%2Ft4af6CvWHJfpq4i71Yg35RLjOTgMMD0m78GOqUB4K9v9Wh8JeqYtpRBaLHz4VxOkoT%2BhT%2FCxlDRfcUB%2Bz514sw8lbfhMhGb4dXSlLFk5Zl%2F9140Ikl%2Fayzs%2FtEKhqFaauQWBBP7YQ7UsLLf5ixzCIgUZi6zN8zG3YhAW5RM71SCXFcwCEllO2sZ3TmXwYzjh9Pit85dFCBntKQk7qoT%2FTDLHlBXNq8c279BI7p8si0pPeNwCxg0nMMd2vVSgc7rLd93&X-Amz-Signature=c77ec77b99eabae259b6e5627174348cca5fad9fd3ef4bfd0bbe7c81729d68af&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
