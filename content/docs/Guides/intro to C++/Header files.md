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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOPOJJVS%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T190319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChJeFy9nhsYhj1rZAiSo7bUNxDksErSgcYcKLK9WeuNAIgK2URi6%2BEN5lfZoG0VIu7rfUlmuACNCPxYJYMAVWvDi8qiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFW3mAaMowngxdGMFSrcA4iyY1LdmQd7bFx95ei3ksvj5ouLG2Wu%2BvhlvUaWvZYMO5E4XAUrpSnMvObKsfBN4ts2Ey1G85DnBDzPAisVp%2BgWEKUsvaFiO7mUt7AsWjzvK4XWT09vb2nH%2BvG5Z1c5%2FW85J8wY%2BVF%2FHr%2B5b%2F70wk9bo4%2Fv37tsJ54VjpIHoXYf5ylFgiT6cunYK7XhB98WbriBxCrgXgOwRAV3JrRgGqTyZLQo4Fq6oaUqUBJhFPf1kE7rzWR1GwJrb8AZ4Y%2FpRk8Vh3ihFtNtFT2lHOqWgYPVbXfzJs9yS5DFMwXOZod2mE%2FguJSunecam773xNCkKPQC7IShYmFgqAZ5zCEfpAZWFa0BqtYqU%2Bwd2COOxJJbxCO32RRvq2mWJX%2F5z63tHsjAZWBLE9zaIFpkuxF6AD4dxGQRYQyZtNiTN2QY%2BiOjVMh7JylKHQW7EPnObrbaUNpO4zbzWEkDe2oP3zcSuQ4lbQQPDxBqyrCYN%2B5r4oT2ZOmTGEKma5eIlGGN6JLwcMnEDmxqaToRSSxv14DQVoTcjqF3isTy3maAYU%2BS%2BEp3xYPP7XyU%2BgyTaK0WF62QIYz9VnBVnW%2FMlFtupEGjnoCUO5VVpZ9ak27tTExINlakuNEINw1lgFrIr1nfMPzV88MGOqUBNAQrd6YFxGYdQZpYxHWQdPCfvE8TWrSRJBN4UK9E31latbip1cyHf95LTvZBbkJe8kvYbFsr1RFA0ZIOodWagfVlvuvIyp1AORvQ1kNzS8wC5QoWIC02tF5FuH7b5289jmEyrAfiLTJfIswqC4qad1Z%2FffLPd2E0CqBzsJ9SYLb4CYfZvlEkpfEDs1%2BSmfSZ0ofR%2BVRnKSwSVXQ30a%2FQdkUhZ9WV&X-Amz-Signature=a78a9a929f35493d2c7a64a85a5c4a0d3d3d2d9319161751c4509776d7479b3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
