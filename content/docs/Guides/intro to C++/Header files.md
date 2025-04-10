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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAVHFBUB%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T070856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCIDy7LsdaiIyIQTTTKk0bmhD9hE54CZZUE%2FZbVDo4v18mAiAtbLhO1dFlAmqkqRPyQDzaS6qQwaqOeMsp09Bdq%2B%2B9sCqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrUscEgtf0S6%2FrSKjKtwDvf%2BAARLh%2FpooG7CDAYN0RmluHlLaR%2BaxDyBnTo45ksQPs%2BY3sOyD5iBGM1bVjssgM5%2BB08kbYDGGH24Jnf%2BbELkqNq05wZyxvw6LSu1Vlon0F1PDzjxVp4B1C89Uj%2Bs9A0d0fFbDf%2BM2SbuI1eX%2BBqUCfWP48DAj0Eads0BkqaNGhmTJrmj8dSOEVL4oNuGDpwZMYzJpLfsatVRtHzEviL8mqTWKNtr5vUtKsrLAfmDW5Rm2CggrggiJuLhXHnxFL99mP9I3HepF9gTnRqPRxydZa0gjf1MBXFgEYG1VzKmzeJ2%2BO6fa7NyosxvSVzuxt%2BXsOQt4%2B7CC9Tc5WqD7Pt8eIHdyZHECcxihHFqbrJSaZdWanWzE6FPR58DcxAPigbvz386R65c%2BqkthM%2BsxDJM7nxWdHLHgnTH4ThAIfOWFZ7a4gS1Yqaa5YB%2FSDzMzyEh9nQolAAmfD7WUdOWYlLjhVowMmXFr8yNATdtZN3obwon%2BcqvwYT8d%2FScQCW6i5m%2BDSiO1zmHKMKHByA0lHYz6tEOfNQx%2FZgVUQoIdqOwEXPXnFbWqNUJzopmA9HGdYH8aUIWkRL8gXjF4ttacSNRBy7sLE0JtJDnLZhTOR%2BJlGutqLnt%2BYfp%2BCeUwrtrdvwY6pgEgvxIFcx4UE1ri7CsyfrE7CoNZKLdmwvyx7vzxtmHgIAxgkvKSX4U8opOTSJhY4sXMocQcIprEQiXS7ni0aUlngqcx8qx3PUQ%2Br%2FuwMUBkhjoHQd2D5lMd8QEH8RZJ73f%2BiAzz83ZjcAH7V48f7Q%2F7CajTBOB4kiNf%2FXYiojsQFjIVkDnQAAJVI1KJDBzM7nMQ%2BXD%2BKyJ1hmFJ2e7%2BbKbJ%2Fzoij1mg&X-Amz-Signature=468a37cb3b0ec5a065ec44711cdf62a8a3cc97ac51ea36b1f3f47bdffe891ef2&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
