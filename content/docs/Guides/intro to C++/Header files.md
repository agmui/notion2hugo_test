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
  <summary>{{< markdownify >}}Why do we do this??{{< /markdownify >}}</summary>
  
In C++ we can’t use a function until we have defined it

**EX:**

```cpp
int main(){
	printf("%d\n" funnyNumber()); // this wont work
}

int funnyNumber(){
	return 69;
}
```

To fix this we use forward declaration

```cpp
int funnyNumber(); // forward declaration

int main(){
	printf("%d\n" funnyNumber()); // this wont work
}

int funnyNumber(){
	return 69;
}
```

we say “Hey C++ here I promise I will eventually define this function `funnyNumber` but don’t freak out when you see it”

Here is a link that goes more in depth: [https://www.learncpp.com/cpp-tutorial/classes-and-header-files/](https://www.learncpp.com/cpp-tutorial/classes-and-header-files/)

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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOM7GB27%2F20260511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260511T033433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQCr6VSWnf6e1tAxOEJpTHlT5nSufoFfwdDPvStz7Nm%2BLwIhALBKxQBr2vW5PcM2PhgXJAytrenIcrsbVdYQy5La5BaiKv8DCAwQABoMNjM3NDIzMTgzODA1IgzP7yYkppCthjQjPfwq3AP6Cda1yHNaAKIUDtMjyhuaxbala%2BGOXaKiet%2FrYFNMKCcI6XvssMoBwpiq6DhN2cWoIJgtEgjHro0A7Ydi3MxuFPAHXhSczFcOJLmpnjxn923OocgDqlXg6c2NYkwOOGDMUBXlvueG0MCyetNq3HhhW42SJLtxdMFcOYExZEV4IRZCgyU54AKzdpaXLq7sKqZYhPzSju6RuXK%2BF99CJZsgKPBPjpTbMg0Vlb1%2BhsskuM1XYqb6MYgwKhckcsqAXrPOJ%2FZDwlZ00nr3B2tC2popJELl5E8D6GVLiB3EENsJGJZcoFGjC%2BuQ3DcHaguTCGHVbUhjzhTUshWVOW7fT%2Farxod15K5WBodqGCcfiRjk7eaL9%2FFwm6mPQwHx4%2Bqgyb49TaBF2%2BqSOQ%2FbBsNnQBja1kdBRWHjFVHsdNgGAtXo9ZSdDM9c4aBxTxCiqnV2KadiCvXWPffiIqWDi%2Fvta%2BUsz2R%2BodDGksoMf6vtdFi53OIkykph5T0L6OLDJ2AP1kQJwf8M8NbsAoLxe0qnAP4bq7avHAvdKq8YFJaxW%2BN5LsSUkNByBqoK%2Brj4bSfFvSr3leBk6kdPlKmYRKK8IWr6NY79ncyo2WAoKE7mLZznoXKCH1hVJGbgvDWyTjD1hIXQBjqkAbKtdy5j5d6bjsUv%2FX77%2FSfslEJJeArdoLEDgdzkZbatW0Vr5mSQX%2By8Mp6fPAqP5EGoAIAWdQDB2ldUFP4icE1K7bJVLJB9X8aZMXhuhAP6i%2F%2FOB4m9JUPfu0dmFmCtt6FeqYFrJ83x1bcSDKy%2FBXSQPJayBMraUMuRc%2Fz1BbwYJjyP9L9FJPrKfPmYJ7Go34GY6Twt%2Fxd1yVwjlrgbjEkJu5hZ&X-Amz-Signature=6edc76069b98118e1e41e534b0e9be0c0c5d78455ab3e1937de1a1609b411ea3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
