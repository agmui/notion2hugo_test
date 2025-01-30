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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVUBZQ66%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T050102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMFHMNvzr2rMwuwhcIyPRkxIKR4nVycF4XYH8QSSacnwIhAOy1dMAblOhO9q01WRPVPZtEx7SMKkbwV6vRPRgWyIuCKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzam%2BJFmy6gNUdzvfgq3AMP2yF6hnhrgI%2FvfvwyNrmTnu%2Fz%2Fraa9uPj%2BVbvRJRQ3dBunH%2FLNmuST93E95%2Flo3uJ7EJwektOkZvGuVp8PU7W8Xw15gG2D%2BD5fDRqcl5of%2FWtwEzzgf44RrYC2PATBrfKnHGxRQKCqJesWtaiwdZkztvMUwVnflzZtak4u6%2FAb17P%2F%2B5Es8Fsb71RbNtBWD%2BrUiBELkHr4fQyrnVNgDAUqrOYn0%2FyDxHm4vBiUvUbYxvwrgGGCTZtm8xVerS%2FtzZNP6bzXHqtboGfuZzXa5dkMhOfIAf1ZuVJ7HBYjKXB01QR9bk3jGMn5bI78KsR4cTQeOnLfsY9pZpIcdFzCC0%2BTTgc%2FwWrcHU9mQjqUA9H9ykO0vz07YVyYu7ut7nfHvG8gIAuBoAthboroRyhD%2BmlxeaoM7Z0kgoS4oMeS3h2m8ktIr6aFv%2ByS6k7yjgxMMjBJpMVf1l4c4qEZf4mc2Q%2FdQzE1ySPS5W211p69vz%2FBk9neHjgmqkNGSxOGSC4h8ZnZE79mnfCASnlT6J2mXfTIcYJjrtARizlvgnttnz923%2BQpMBEt5w%2BmXDTXYJ63ddl8SLo4OSXZg4ZyqYYGpN2zNL2yVppz1GDXucEux%2FrPXrzfm83HvTwSF7SSDC%2BiOy8BjqkAbQKuS%2Bt0sYcQ7Fw4PjBGn0nIe2e4OkZIYAtW89L1ALEwsEs35%2Btr5bKocZEqaVzcmftduFMK6Ed%2F3MhnhuKwuAPbXnqa3OpRpRFyZdzMnNoA2zUqZ4NK38uDDNm5bVTrZF3DjrEUQPQlnf1p%2BYu4EWSgyDzslt534rCVXbnEjs9Lkaf9rd1HWgqhgZz9A18L1praN8VWRZ81raGivoaxb5MWZuu&X-Amz-Signature=0080b0f25419ed5fc68f1e90b657af971f54b162dca1edf78eb93d5b6caef8c2&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
