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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643IMINGQ%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T220730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqXHo%2FL%2FsKjA4tj0NERPxw7wQbDHLldnbRtSi7OkMCIAIgFYnhmMWG68o1SK84SnItX8Ru9yqWpfmUOcvR0gVXfKQqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEqo9AC0ohE7dr9kbircA%2FihpzVH6mLAqaei6Dj9CASz2ThK1feOAoGgOsOvI9VDOfjGjMxTvJIfXZTTMlxPi5e%2FYOqD%2Flk%2F5iAx%2BJesAEWMONuAZ1F8HZs93eLqNd7i5kNpmCwO6DHR8QbBWwd5dAF0bJXqEbuHPZ1PQk3YrKVcsh5OPXlUcn8E%2FivTU%2F2UBKNfMBZptkWUNsPmeu2sl0HRyAe49B8c8zO4o2hp1wOjNCUdhkMeXjEr7kRDPWNpUGCIDS0Y47d5tuwDlFXuK1UWix%2BCphTr6apufWY%2FKGQNonxyN6NQ%2FEnabHYOZT9WH7UxZwiatc3ArL4%2FG0FYfqhC6LSON63LAQtWC30lOSL%2BH%2BddoGv5eU0S82K5VlciqHJE%2FUXRNIM%2ByA%2F2mUW8vN3%2BpiquFNA19t6cVB5XUL%2Faq4L7srO8D1j3KortjcZ%2FQZbyUose0S4RwU3gee8kjws7F2gz6s9cBEQwZ0GQBNX7fEr6fjWwbXQj2%2FuiccP8%2BhPNbtZMoD8Y60uQTlwJXl4KcoyDQwophRyXRIZIZQEMu85Aa%2BZKITnxyrVHu9TuMMhlxZiwnGeq0mf5Dg%2B%2BUQzdD9i0a7H0dML1EC%2BlXQt%2Bm9yjEv6WTKh%2FGJHOolE%2F9DalB2F4A4rsSvmSMLrNqb0GOqUBtokFaoNmmdH5cDZQEgz%2B3mANXPCz%2FFsIu03osPtC6vyhN96LSKJJHa9AZdnFUNJB3DZSR6D7Q36ca7cNmrW66TLPgia3ODLICOMd6KLgIH%2F1CUpVRx9L6PV8nA9O%2FxEInNZlDykX%2BQsYAgcN4Tg7%2Bn1SbCyRpULIPT1RZzcOPXfUQ5YUwzVGJErO5acZtIJR7HTF2NC2rZDJ%2B4WjusjG8epwWeWu&X-Amz-Signature=b9bb489460f32a57062494639fe5526957eca77e4aa3a04c4637dbb84116235c&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
