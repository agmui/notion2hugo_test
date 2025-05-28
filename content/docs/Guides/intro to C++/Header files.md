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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZQOMUII%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T132458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG5p9PatVzR41dbZzN5gOldHzSYLXtapcURp0Gfw0EAhAiEA2m3z%2FxxK9fBfRV%2FlKt1BejbEJ6XNlXXWiZ8pxx0gEYcq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDDHEPlNS%2FlaPlBBzHSrcA41Ht50mzj4pZKMDU3HRpjQ8po8zW%2Fr3Iv5D86byZ6Kdv34qPLFPaM%2FidQwm0JFLSGr0rRquMvB89U7zMS51uZQgFe4dGU04xnvndT%2BH4l4vlodslrZd05QVT6sBsya9pT7Kew5UYLZ1HZQ8Dl082s4f6n79i1vkBs5WPJQiEzKGPhF%2Bs6qJK1Qosd0LdyjKVjxNqMza2IeBuyh%2FZ09zs5657bAixS8iKh7OqoxZg5oYyXvZT9cTvM5jiM8m0vrU0IWNFkzArWNjxDP2SFo1e%2FR5cGo22brevM8HJuo2JSbZvwaNgrBr51kdDWQlL4fQc9uJtnvkR4VnU7fMLdhPwBtcEzEPJbJSQmO85fJnjmvIAix%2BLeAb2kS5f7I3IJehS2QQiTMitbXln5HX48fsj7gOIB23YdQllaGVY9P17wmuw9AA1Crhu7V89%2BEUKvIi3NYod7dOB75mdfK%2FGAMOE%2BHIwFkbSQTgkoxTNSWDdLHkVbqv7Cj2GATnOrRxMZNmsjpmKnvrh%2FBDsNiHbA0sOoa0IV3y1sqpQugotCHQH5p66d30yChSyCWCqrnGJQTYKpQaxwG9SEcebWaUcdDnj0iFLTFMxL9uf8ROkoTYc9NTgD9%2FaWa5WqsD12LyMMmT3MEGOqUB0R8MBPZSXX0UEZa0rbLpKTf%2F%2B0VmvI6pyAfQUhb0NMFVf9wsmeZFd4bYCveR3nUNlFfBoYeP%2F%2FnngcBh8Fn%2FlpT8qRY2kEX%2FUYfOWW9GaXG5HqhrjNvZU7SuJ3DOH%2FXOMAlI6Zzep7YnR2uI6NYFfoynVPZY5YeAU%2FvYxH0zdV39fnSITmWrKa6d2GRE7pwoSsxZh8JyS1K3EMoBb97Esrn5RMRA&X-Amz-Signature=948fbf9b60e519ed6aa14b0a7df72f09bbb8732493023108e7370ec274f02f2a&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
