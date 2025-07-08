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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662C6646WP%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T091145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCo2Du2sKfNCCpJLIf4XRqz6mIPdYl0dX4Swd4quVUTAgIgGH5L8Qj3cZPInouXiA7M3kkZCuwLBPw5g7AzvHXAmGMqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCfIhCcLyV%2Bre4pWkSrcAxD644CQxcVDF0wXnlouxNn0zuKbVqSm%2Byo19h95uxbsEiRwNwCFLpiWLZDNUwplGJcJeDwnMKUkw7PK%2FrWPyNdNt5WwScj%2B4iAhVrKZlWGzMcCiTW5wx41ho2Q60xYC2dEFGkoHPRppdntrqvjoZpIHvNLjNnlMoM1CJ6fXrlwQpAVt%2FaLA5TtmvbLAGBnEm6IHHWN7E0P30WeFaqdslXpliczqMvq%2FJdq%2BGS9hldx2WEp9MFyhj2Y0LEWg9rm1gp6lyAi93iNpQ0jedXWR4s2amV5rMYDPpO3Q6rDtXB6xQSuoEHf512qjidCovBeQ9aPU%2FuT8mE5vr9EBFq28XL68%2FwURDPirmUJ4ME7qgTVfwqR%2BCe%2FkWhbDQecS0gy5%2FuWcmnKb4F3hC0BRiKcVgioKa1VSpisEFTGOSgw%2Fy6Y%2FzG6jzGeQWgzLBbGPUK%2F4LefKhwzOKf0gs1MYsz97dSi5tLhBVetcPPW1OUHAnsqNa1kiD%2BNm1o1BVcPm7QJoTd%2FF0w6HY0ZVfM%2BRnySEkyp12Gcz1GnjdbEbs%2F%2FfdTxyLD%2Bx8VBHt%2Fd6I8zDbxxqUTAa1PuMovDfALOKqUwMwBpSb4Wo7Boaip06WEorjAKdPHKv8%2FXpVKQ4iLdMMPSUs8MGOqUBELpopBYG1GoF3CLUY4rw4AP%2FLeG1p4eUNnPISsqFcZ9SfDN2%2Bb8TgPNyqdW7Y50VphoV2y0Tje8LwIqmxNLdaYBeen9iQwxET6RPMuBzLMmQEyITrGZhHZdyQB%2BHVFlF7Qor%2BW%2Fq3CUW46QsoPPb2DNp65lP8C5%2FGJWj5uY2ptgyofv1TJpIbYjr8DxupCRH6DbeXXBcfIeBWeXkKTh3hFk6oOkN&X-Amz-Signature=e4bcd55de8b8902896e294897daa4f83d8cc02c2193c04571c499f5988537c0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
