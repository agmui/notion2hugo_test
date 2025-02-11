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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KOQELQE%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T180824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDovQp7DQDpeaeiTewSzSaGHSi%2FQdJHmel68V1V8pWESQIgaPB88g5ZA%2FO0DEABgIxFE6psza71TP0wSDeLqkaTA5gqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHEBxGkrPzjyNG1tmCrcA5E0YTuyXGVXA1RAiJFewaI0OfOyjYi6fhZkWNg3aUFEIydZW%2FyzhJ5GHmJsrOMy7lcEw7VzfqWOd2YNhQcEXtw9ygIJx58k%2FHpGySvuyFsI2JHoVkRd8w5mZKS170Ry1YOCVqW%2Fw83xAQ94lX5mkhhryU%2B1NpqMDxYZVxwIQisqDp91eXo0%2Fmz18MG6H%2F1UGzb7MgR%2B%2F5DalX397%2BzKLIm%2Fnw8xc45gPXEhHw6K6MUJ3o2%2Braghyxe6VOcRpWrj%2Fg00OAVIdiLdlWtqHracEtfzA6qkKtbdXN2MeXLMpOhOiZuqO2Xi7ZB12q%2FaPjow27UVoYc%2BLiYvTTzDJoVxfp38g%2BrC%2BVudKlxgHvS63NPbcIFRKK5%2B6O7UI0aZmZOF508cHneiLsoJg3xvtxE4tn8WHTIRUw9TL11TapOkFLMdBtWvzvEguGghLSfQqbzCEGx8uv2aWOcG4xW%2BeIFuFi6UW6JS5fByF18zwb%2Bj2gaclWVM5ijG0HtPlWywXUQViRhrYUJcK6G%2BxCGLx1mQw1hIAAWhHYM0rbcvZ9lDW913hk51IwNRXKrj6aWr16%2FxtN2B2MoYG5nUkuwZRySNWlB5lOFjVbjLRWOwlSjgkr3Dx%2F8r2Re3%2FUZjPiL%2FMMSSrr0GOqUB5nnlOLOSTEc75Xc4iZdO2W18l1q6K9b6E182B4hRhalvRHNEVOLrsmtgnH7onBr3KUexg2K0u%2BPeL3D%2FTteg5T8bFK2mWDpACwJ58Cyncrf2lddyHA4u9K1GTeD5jmJRj2vvezZC4Cw%2FvlJ%2FuuC0JvlKv2UE%2ByLxIIjGegwemHTcPOBD2bzsy2o4seW0AUz5xla2KtnC6%2BriLDogPvqa%2BPH9MiFD&X-Amz-Signature=9e8d5ef1111ee57a6aebccd6e5dfc017db235f76c9212c39d69446622466215d&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
