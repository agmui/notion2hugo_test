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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635VOVMW4%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T032117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCICgmGKn7SuAey1MTfkrMNjiYFpLHnS6yIe0lrm0tQ3LlAiEAjUmeuzjuPxwrb390e5xa7Mh43XG%2Fam6DzJD0DGCylKgq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDDJKRY1R8rDK6sO2HircA%2BKF2lfexDGzXHhoNL5sou1UU1n7OIJmK0qXYbhAlMQjoyhzC1JIps2h%2Bb8SJRg1sYaT40Lc3u9bTLCxqQm9u8jqiHI3gQ6UwviD%2FHICK9ikJFnxiaTxvHynsfz5w0zgsEDp1Aej0vf3F7I6Docgcw2vs0xi5B3PsnjjlS9aMkstOpD3USlkh%2BMfviT3zT4jEzDIuhGEagbO6ZdZS3cmHUgl5ceO1nKp3NOqdJ2LbUU7xmmIqMj2Xw4AgeAKBLh58Rawud53UtcL9Yxo%2BnoCgDt%2BybOyb7TMQPp8jNUgfZm69QnlccCOduOdvQ%2FqzG5bWOFof7QJPZ3is%2FAvGXsUaNTAaajiwRnGPtc3rHItg1feJb9vFKoOeZ1x2FdEUhTOAqIm47ccZsJlh1Kf6GF%2B6SyI1x2msEge7Qal%2FfWw14NuSoCKNyUIcrvYcoEHkDnlnpzanTilTWTO4PATzbELQSpkFlzAPIAO6E34tQ%2BICrJrM85qccMUYlR8yxx8VC%2FuNEjvg9ir5JuhuACkFqaN39gp%2BvoHUiuIGjqCariXZnmsJw1%2FAQ7X%2B7d8zWLDNvaD5OtpgZ%2ByBdxoLnHzea3noXY9iuBCJ1CMgO6q%2F8C6tM0AVgZX8pnmQ0N6uBbkML3fnL8GOqUBiByEJ2qXUn2HA%2FvYe34twlF9gUffb3Z2kSjim3uc%2BcD5wHTVrDQ%2F8%2BRzfdtsMUE4APa4bUAbz06%2F8SSgTrLC%2BsrCQcOU5nUPCz2MjiO0GZ5uvsyxskz6CHfewNKiKXubqsBdjssHNLvw5iZH1lz%2FMS9zMbb5Jzot%2FT%2BzxGPzbhK6iI1cDYL5LzsQ288RgpmXZwC4jIjVivl4gFVT%2BqQNNYbz1w9Y&X-Amz-Signature=75522fe8203735e09e6fc7d5d72236fb0dff5112d3c363d38ae517dfc8e74e02&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
