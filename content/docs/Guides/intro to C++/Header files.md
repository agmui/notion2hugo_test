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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654DOWRKQ%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T070817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJIMEYCIQCl1g3eUC4zsxdX3SfvstKpH24YHo7hA99qDtZq9O2guAIhANNQ5AXJemK%2BdVsrZze0wSu%2BEWtdvaaG8O6CorxVpjPHKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzIbUbPYH4I2ZhgPoAq3AN09HSb8HyB2%2BY044Lcw1nfL65Vr%2BofuHeOwVSlw1twbSxJyhLWxlQGxeGoUEbaEIeAH8tiA4CAiWRLDw0wGVI6dEERU3cLvBlGxcZht3JClzR8q8ikQpQVi04WNmwe9Wrqj2NQzxA4TnujFjzS6B4%2BWKeTcIKRZudqxUpB8yyuGrPJ%2F3SQ0GIbjwlyo68r8KjnYkp3aRr4412jBT3sgD43qtv41fUqGyzXtwtdNNNLlxO6l2xduOxettZqMQWUE835Wv%2BY0MlmYZKAID8i7%2F1OQW4hdof3n6xYwP9iMONxQMelDOiR6Fkii1Da6w75%2BWDnw%2Bz0o%2BgHtEV4UIneygGXVJU%2Bo%2FMp8UmtyqAG9J%2FSHZqlJvv8JgzJmQ7dPUEX9CXtwNtjJ7OB%2B9Cyj%2F03uj094AATCMCqB5NocJwJo925PsiDL2c7DW11wmQNTCc4cH3OEoqAJBE8VstUC%2FxsERT1%2FXqbLrgyk%2BygwMOSbqQrHzRnKblRrgmicorUOSsSnACkBETG0%2BtS0q38M4Vr0PtNryhYvFRuiI63bmSa3N8t1WvhORrmFFPOFL49f93sVV%2FHgNX2hvzgO9cWG2JHbRoFzBNRfLa8u1yHFvM8QzEkyoIIjdxHMjCa8wW6ojDA6O6%2BBjqkAZAZ1U9%2BUfVqQhTiUDpUkFaheYnGNm9lZ%2B5vU1YesQvbvli1mCxzc7lmzIOIaw2%2BLQNXKpGbU8q54%2FgUq%2BJpER6jU4tfrrLavJaqBvDqee5qKpqhGxS8tHyVL7gqsxfDO%2FS1D%2F2v1IKGrIIJlY3aonE8opdpz%2BAFnmjQdIdpH6n50hkQWchaA93uv4AIP%2BcByP8JnfLRYGO6MkpBexMfY7hkXRiz&X-Amz-Signature=50cf31dc71935aa084a3cb581b435e008d812e1fa4fcf8f0e64f41e957023697&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
