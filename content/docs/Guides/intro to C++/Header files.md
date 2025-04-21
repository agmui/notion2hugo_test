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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666264XME3%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T121500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIA5mp2%2FdAMCprfMkJfh2ddmBp1rBXBGTUIVoUXLo3eDxAiBGuDXkIknkdbAY6wt3TbMd0UjIfrD6U7P1mmo7tNF7uyqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMY0kQ%2FhUfHez0%2BDw9KtwD4nC6gPJeS3iXkqsjmJ9FsHN9OsnwnF%2FcXp2AeHGKr9quFFhM3CSGGj1scJjGvuW7TmYA%2BGt6dSLTVV%2FBH7y%2BpFlEIShlkbJm%2BTfLVKKZIV30mWPtVO4QnXvpQFlBn%2FJaegL2Ll3AFdjFR1HeR%2Bw3bzcIjYUuFkZYJuotGl7dzlgFNiwdrCjVcb70NnspKye689Nflzx%2FpkQFQ1fFtZay2%2BvbQEORtf%2FWBA142vhSzMsJ7kMfWV%2BO%2BnwLMkFn6PoynnpgTuAym4BOp8fsuk3rGYzOUvpXJJdLRxPbMpO64LkYnYq7cEBWSFt9%2BmKekr1wWyPsQWQWQfbIC6UodnmyI5qMpjVGak03zP01%2BbFaHbheaNO6tTg4o%2FeAZrctvN22v6W4uOTL5MvSP32Mm%2FWsY2NH3GORekCt5jzkmWaI9HQLMQZ9mnATCricKzA9roG7XOUHuQUbnlARrR%2FN34wSrbFXKcGkQcwchy%2FkMgNoGbpdvplYa7qgNgAeo2vtKv7d%2FqcoNOA5meW4MiHVLWNZAaxpmD8jR7CzLf5LrLJLPAiRsQLRZnOyvkx9eQcvsA1jNquvxMNdlKG2ZL8Fq%2B9FqJh%2BQlfTbAQIEAFyd27UYgHQbf4a2HXwvXjH%2FCQw4dOYwAY6pgHIloYONDfTO8dBUUvwphVQaY%2BxW3YFhNhZLcyg700%2Fiu5K5%2FsbMjyNcUG6yVo3Bnyg0p9dAGuUb9xWJuw%2BuoDts41%2FOq7ko520QUK1YEXxhKFUt98i70rRd47XjqthvLX3eoFKJkA2zo8Mfwc1XHW%2Ft%2FQuPQ90vygWQsxepQ%2FicZhGmR%2FzBCkqOAPRVPrga%2F0B3h%2FN6u51K1Td562aW6w8lkSxeQyp&X-Amz-Signature=d301e7f9254d69c8ee98b04e9a854daf436b9f75a86b5060fa4a95554dda4715&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
