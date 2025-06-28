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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIBVGKJA%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T041232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICmre3KFhEpMIgzy%2Fw7a%2FFDaNgPR%2BHRX4cO1eZtQorwJAiEA9bGlQEFCJrmeMz3AHTgERpWjKlTC5X0QtW8Emj5SATgqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA1QkymLiZM0kM2q%2ByrcA9dLFCznCyMrlmwfjPTbTlKDMMjhcdahEZ%2BfeibdYTmiansFwbu7b9dJOFmg%2FYqKnG%2BFym%2F6LQmair%2FJJIlvu2O6y%2Bjy02LA3kQKf7tinOgaFTGIgxcpBP9tkYlu7dKQkDoFBsrRgaIrcM%2F%2F4qheatwOVf09gycjwM7im0AI0FH3eklxadbS8Y%2BpbaAXyCdN%2BKv8gEcviubgcoQcsbhaj4ABeVo4KFnaXw5JZssJKiGqoB6fES5huhOq2JcHH%2Bqpid0koR%2FqhLaeUZmYho8mqeuefIRE3LXGwtwLx%2FoMUPqFekBgPfrRcOTF%2Bqdq7l9Y1e7MU0M1lde8FGxJC8BQe8Cf8wDOhcofZQa1alWeRSZBukboNGVaeVjnrTo%2BqBTk49rPNLrltWgUh6PGsn7KCE%2Bj449j0MEMqQIjc4Jg%2FgaSi2ZNPSv6Vg%2B8HndBTu2fYT%2BeNjOPft757asEWtQ%2F8UMi1cFHrrDzACtKditecJP3ZuUGgfpjLfS5QWIvqE6Q2ifWLrhNZJmu9O6lVH9LpsU2RINEfodypMvnVdf%2BAIDVmTm7bVw4b437WZHx3rH4ZSJ5afs%2BoM0431bDUm5eHgZa1kYeecFB2wtNdxYb4TZD99RMllYyUAZXoYPiMLnS%2FcIGOqUB9ZShwYOqH1rhPb%2BziVVRHQsBBIsQRqzNRVwhoMJj6H5t1AcN%2FxP3AHhkFlwuBbKNnwbZ7DWHuG4Q%2B3EkSjDE%2BPBTxMVpMl%2FmWnx9sFLJ%2BX9%2F7EUgQ1C096jhOnVj%2BshBAFzK44AK%2Bihins%2FMbqD2AD5QgMLwGTvd29845AQPFWeYGs%2BcU8rlw7Ej17VduHOfyfnjlCZfRzi7e1pcjH5bG%2B8R%2Fta%2B&X-Amz-Signature=a54f77488b7925bdfb8b373824d01c684bc5851f3438653232fc4abcb85a7d5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
