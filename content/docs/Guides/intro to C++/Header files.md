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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSQO4ENC%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T210233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQCS6y1VjxKsnWo5vBlrSOlFwSLtJWlab0QJotB9WWrGuQIhAPNoPYLMergahv62qwezSma2J8PSFk5BdXUIojyM3P%2FgKv8DCH0QABoMNjM3NDIzMTgzODA1IgzmkIazSI%2BPT9WB0Eoq3AOhR6iuIQKYpYN%2B8v0IUArXwS%2BbfZlrXRRoD6Z4of%2F9xLVjGiPVjQuMlIkFfORHQ9Pvs5unSd8WBGIYNetfABEwjLhlM1CSf6mutSv%2Fpn2us0DreiChvuxQA9jXe%2BiPGI%2BQo1zPxZJVHIHUOJa%2BSxGXvYNTPAaWxlcppCpSgw7dcCgLKg6OvSBYXEPXcguYlcNORYM4fEQhNXXLIuxxxuxXAecpPRRY%2F59eb9qzSVaIyZVvJpxaqUUVHae0cPn02y2HIqam%2FY8a3Kpg0juU9fkyI7VeYOJ9ct2jhMhQijWVrK1EU%2FUCi8LwuwZaSxSNmB6OmmVREb0IIP3skK7P5zEpThoHHLpsksa4xKv6nUEZExUx42X6O7SV9KRr1jWsZxuc5sb2o06OPCnib5gV9DAularJ2LEQpM%2BuP41Qz4Y52XEt7cnS8SZH8SJFB1Ulj1SsRNEUO74hVSu%2BctNs4hsYn9JjB2U162473GonvSv2mrsscNT04opXrTmzi8oLb6IqcZXkbKtGxrKMdLIKPxi85zED4wE0Q623ImccrAFY8qlCdPNqcf1rDutcO%2FXxGXcGgYoJRJoKLjA8PSaafPwRsWWkyvn%2BqDphWYI7Us%2Bz7lqErxhYZO4GvBSEjjCnqKG%2FBjqkAdXANWBcKwP%2FkzebELV8e4aG0XNquU%2BwVoqFP2WUOi1D24aeEF%2Bnhu60zbNRUs1dYRwBS5FnZbWiHlWsk10kn6vIvvDqM9Gb01MOs3oBlh8MQANA18q22MQZRuA%2Bn9w9u3NhNuJ7Wws8My3Il2%2BUTBHR5QO78JinDoFz04VFsym4ErYTSr1cPWw2L1W94p4MehOIZ5o9Zq3h1N%2BsqyOgXZ82gXxO&X-Amz-Signature=bc7784880da16d1fff78701931f1ee7a8ff4f8169fd5e1b70b72bd7931fbe955&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
