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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SFFRSHZ%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T160753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICBtdYrm%2FzCdjhY%2F3k3k6qSJaCcZGltJZY8%2F%2FzS58OiKAiBWk80COe6aKMDw50i2IzHP1aIaS9UeUdU1O6wQMQGGair%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMBY26b%2F3cUp2%2Fj8gAKtwDDrQHQBLsLH9SwFlzolBA0wmVfaaK6XW37Fkkm%2BT6B51ytN7eg3NgYhPmgUEUFOsfNvHxwhB6RPHPC0TfTFjIAiPry%2FJLDViJe729rfZW4%2BQWc35O8Ls1R%2Bynzr65OhGJeSj2rC2yQBnzZjKoXjFB4GOywK1o7p97Uke6QG%2FnHXNoiHf0%2Fw2BHkmZyJwjMJtL4sxoQE7DSDYQ9IJL3tPsJ%2Bc98Jnuy9v1CrDGZY%2B7O4pcJnO1DdWVRbhnOxTuB1U4aaefUDfLeuHDNLG0CMPXuAbuhhf7U1JixHv4JulTWXhAGSHPgCKe4hk7Q0oheJE9S%2F%2BYWOVBVfD%2F%2BYQuGEcu2%2FlVa4HgxgzoQsbQvR2eOIZYFSPpf1acD3R56hNz0%2FP8ZrYe94ly913XBeWIlwcSNX%2BT6lJM5vjX3NsxhB04PW6hCxwZROB1rctsJTBUSG6uHUoLIrIf3xGFmHYtfny%2BIevf5%2BgKQ7B1fpRbOnH0TSqWSmiVgOolAjKksUxirAWwHaQiALr5jfSlKsm1i1bjHRvpCrNKj2mcigZGm0iumxHAfBRzn4E1INtZFh7O94Oph7aq2TQ7zadf3zB7CV6%2B09UdN8ASS9I8UR7vIrxxWgkGhhEeHr52uwgDSe4w2aPFvwY6pgFpn5lJ3Ky%2Fw0oJp8vj5sJbB2WYBIdj1wW1Rbsa3dc8HQxBxlaKE8LSRWIAnQwSmFH4hWvZeshPCoNcuWGNNRfG7onRIKdW7x0uA%2FSazf9E5Q0KkYzr7w8G%2B22az%2Fw0uIRSpVbSstGopi1Y%2FJNNJ1zSwoaS6ROSofazHEXV7EOQXwyXDEPyd%2Bhf2ZpDrykDnmNGo0yu1naKlJspkRclsZjU9uWnXQi5&X-Amz-Signature=2b96d316db308193276133bf611a6a9266e58d7cc91f918d1992132c71778bca&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
