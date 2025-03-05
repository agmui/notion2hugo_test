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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFS5ICYD%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T161244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOuqjhqjMIKF6kVO%2FaXNsdG%2BQe1VtzFn0keSJrVsJ2AQIgeBmZFcnyCXHOF3E5NNDxyrqJuPrU1obaRKin5afQpkcq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDNj5cRjkQndL7rVJXCrcA29suuiblvCWgAyBQUyilmYAmWYRUGu58CgApkrzfKq0SpVZAAKQ4hxdoE9ID6HqeAKFdymZxXn41Aknhi8SgHbSDgd0ssWFlvaUfOmhQjMIKZO3VsuZdD0WwUTK6tTqA%2FV%2F9GUq%2BQ3slkjUj%2F%2BwaLXaAAuVsv513BOlSMJRL5YYolVyaZOeX1n988c1S9zdWushYB6ov8nNR82ozwCVPv06khq5%2Bi0BqemVmpcUSM9Nxzf5BCIRPw%2Ff5HGKeJzx8AC8zqCswdTTOkkj6mUfWt6XAeS67MpL6j1%2BtRElnV3zgQEMYpLfdC6Fd8c95uBri5qWZeuNn1HxpkcGbQWXKHGeaAiROQdpl7iu8OiDH46uLN7p0yC1%2BsbDx0U4M3Hp4dgMz%2Frnk%2Fgx0tbwMaOEWs3RMAe3wvzRIw9kCdjgYADtsVFjaHvOKBj5UjGB1H3iEnRERwhTcA%2FgcOOC8Oqn8LsstdTXLvc4VTvawI%2FAQ0ubUV8cci95Yy2tzqq3YPjlXTIyPBkXNbjPNGMAkx9cgsGVay2gCGZa0pgIJ4THVaqmlnNXH7eJe6oRhwaO2BciOuDO9TfNMk3tOsQD90qB%2Bq4vAZztokvquvDO%2FfZdySLSLAryxKm7LMHkfp60MMO4ob4GOqUBoSpnc97AZrLhXiUW1BwLytNJtqtO1tI5YTpUo7OUfXcrnfMsaMcngjUiszyLU854L%2BhBXdv%2BBhB2AlgzHCXmHyg4RYUT1yhMEvDOtIS3tsxURgBpEh4P4cyBnZIRV33FgnByYeLeV7BhnAybZZuLv%2FdahEEgzLcWl%2BmOC8dS21Y7E8yjP%2BKbfyh5dkzCGmICuxOBPtGRcI08l4LKKWCMcFJZbiuK&X-Amz-Signature=5001c6eca7db850e3c3b4067329b65c7f21917eb5e06342431be2620d214398e&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
