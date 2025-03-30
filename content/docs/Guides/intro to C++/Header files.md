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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TROIFO2V%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T050758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIC08JBLsI4Aruj5TpJ1fsit016%2Bpun7XhYBDxiNl0amGAiAPRlZ8Q3kXctGPJ8t5mWuvRNMAgI50BkxX1DR75qTYEyqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsXqj%2Fx%2Bb%2BkieNyyfKtwDZys7lxZAJu6tO4EFcB0LMAEXNTt2YiLzjCmW8y%2FQkl2kkIvNZABMt6lBTWI9FesImMlVGaofk%2BWC9QCN3PtVutKuD%2By0jHWdK26s%2FyJv%2Bg6e5%2FPnNG%2FDJhFA0iBpY1rwdjcjujcyxKIz32OuDxXhdYMvjFUv1bE3NWIddxd7GOHtghuQ4%2BhvvkVlk0nVKxYlq15qO9TiRIHLFBKjwNZc8Eq2g2DxIjdmbb%2BGWDQ4xQ9OLebua8J4adhEVlfd3MCY1d86%2BOcTbue2g16a5LDOwfb%2FZ2gd6a7g%2Bf5FNdaXeQFwU%2F3Mg5AF6uat5q7Bz4fOta0EkBTNXvV%2FgxmPpenR1ew%2F6MjFG3Stt0p8Jspv8UjBu%2BloxuDanhG56eKp7SXvS6shQ1dFJnu6AE%2BVjhEhQaitwgYpspbsTxkCVFpMRWECV3vAsJEzuioRijl9IIaU3uBWaslwvEg8zS%2B%2BIfHL7P8GJijyD3WSGj4qngBatRHNvFNTKuyDAOgzCAf8SrurKei%2Fr2t5v7FWVWm2QDFZ7l7HJFdqcchRQiLWssN%2BTNNDrfPakxUoQas1HxtxSwuajlRxvxAZQk4HZxcU2fKstXfpVFyuTPlP9gXHaDFyn0MHhQqUld95bNGLvgcwkuqivwY6pgHRC1ZFsndAfq7y7j9vT7o1eSnwR9njecpZPx%2FBnnlhQ9z%2F3n2y1t6E60sYeAshRTmSlQGzp6goRS4lvkwXVYZGTUfys9uXZTNLZPnOPmPrGw6M%2B%2BwN1OI3%2BckXNGQmC5bjXGnVG81WJc3ynRJKkYrL4UxHh7wxN%2BB8sB80rAsDyMVC%2FmMqAVo41V5PzcmlsLi26VDZt0DmADwojZBaMfNHArAyAkgB&X-Amz-Signature=555062efa63104755b7d749e60b9d158d462e49cdc15c6d011ba0b137e5f6a96&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
