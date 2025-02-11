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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4WFOA65%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T121405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBmDjlMmoc5Va29CiGcm1reHtpCG8LhLVBpgoqx%2FIKeuAiEAkQn3CfAUE9lUbnaG9jQtCPD3Xx59K51F97SpLLA%2FpcwqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIQlYtAG6WEXxgNBvircA0bVQCS8BTN60EvY2rulwSh%2FPSoFvkjsH8%2BLrnFEw7%2BzFcA9%2Fw4Bd7JlQ2HJyYAIcq9pS38k5vhRBKfwGuPD1cK%2FjZ5TSbgPVaX%2FRrswer7ODKZbrQ59BtB9FV8ySYsF1YPpP6indHHET6wg8YRsvK62B3yg6XakGt7WSIC30lbCUSlWraHpdaG3eahW2wLjmJydhYN6UiGRzguyUytbvRWVvvnws%2Bs8EJM%2Bn%2F%2B9qWtV4gDPKxVuGoTEAg5M7oacrFYKW3vFoMYcxQ3OeT8D3saxzkYm1lr1qrQYju6ZU%2F0HUjioJ5%2BCxqtFJL386Jxt0Kx5h%2Btn%2BprUkTg68wEcy%2FjpRAixR177I%2FPb%2B8pAMGt0atr6HzSZ8gkP0AA6RDcf1EePc6mGFGOsTdg3nRcsN7babJSKGbetMcj4%2FUkhFwDcWRT4%2BwhsccUzCnJFlFZFz%2FiiuGK7zTNDxeh4nONY2DtOTrd2XWR%2FnriNcs%2BhX3eZ3i1NILfuDLUMET5iJZw6JLLVmZ%2BCfL3F8jiIkfua7HFyiO1amcyTzJq7YKzWpol3LLcqkghcjZXjJXBHQlzIDa8s0HeBWQIqwxVos2bOPh%2BZeLHDSpMLsAYQc6Hr9dVf8FW4dhdroxcSS8fEMNnurL0GOqUB5fG6RidzzatUp0Fa5IVGEs2kaoI1sQZt2VJ9w32JdJkOmtsot%2BKaL3EsmcTx4SIBGDNzT3rNAeql6XNe0MwHUWlly4YCn7nqPxg09sj8r%2BRj6VbCGTF%2F9do70JYXaPjOGvpeXXCgyPQN6nCiQ08arT6jy0qkRKVuB5yw%2FOm%2FaFbWxieYgUSRgEx%2BkxJzzaiJYq9sopTBVLm2FqiFSMW%2BrqnzQRTo&X-Amz-Signature=b18a1ec91c8de96ce9bd42dc16a719b2b6cc95ee8a19fe9a95b5b636be3e064a&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
