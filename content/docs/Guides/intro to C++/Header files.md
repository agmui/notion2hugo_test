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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WLBFSRC%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T201204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJGMEQCIFm6O%2Fr1oCV4aO%2FloKFS8dLFEh9y1h2hU6zoOXBPJoh9AiBUdQxlX9J5vPz9kDguTQuw0tbl%2FgcXzAS5X%2B9cKIzMkiqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcLwwJSVyP%2B4G3untKtwD3sXoMQJ4gPwVmAY2crt2BTks%2BqdPGt34wmxksPnC0cPY9nbC4v4YVBtecqhKe3WtnrSNGsTxWq27HTJYwFafExY7pQ4vLeoLfw%2B0%2F7ikx0L%2FVRHq6M%2FAbKF4YuEr%2FM%2BTJ8qs4bk6g5IF5t%2FMwXt2%2BWWN8pW%2Fo0KLoxD%2Bmq9XMZ8i191jbpPeOF0aQ%2F0gvWIiuVZ6pfl5CbYxu6qIgoatEIERunEfEzYIBKC%2BbWXrwZZ66RSYjbKjUVDrOdMpiBhdylpl21jR5RgY4e3kztVo3C3BuQ9Ji4n%2BaN3kU3aoJUqPpy5MGCmonwiRwvWiwQd6yCQ66dd%2FjHnLgqaOMQoY8do5NutByziPu25Z6BaDJx%2FYlaTnR%2Bf%2B5lwkyCj5ClLfKgnugnUGovBG1KO8ex%2FCqbn7IymWXGdxkDFaQ8N9WkktKKc5ITcmFa16pV64Ka6X1DLMA9CQfZdImSW%2FhUCcdGd0qpTY3ZR8gJAZ2o09fJVAtsj26fmopgwdz0tH0S%2FI0ANQVTA7nRHpNCaGWfYGqm9lH%2FOE3Knb6%2FiFdOmMvpVuScL45BZbrJqS53BQWX2zewp9Th0x39j4OvfeRBt7F%2FD58ive%2BvCax1lwkZsYKJHhW6A7Ky7WrpkFnssw1JTbvwY6pgGBQfd15qAEVE1v9rCeWk8RVstizqlQDYWEhbPX14radsiaNnH7W%2FEFRwpqWX2ACiRBvqUgCOkCb7J0rEwMvnrXVRSRtOKP3DvwoZNQaWvT0KtsohKKV8284%2Fei07TBR8vkslbayfyMVYj1NaRERC1h4kbC6BpAB%2FaQeQfaE67j6DK8Y8W%2Bj%2Fk8E6clZ0mD6dqs6n40Pwf25HsqoLIyTha9jfZmCwH7&X-Amz-Signature=9505d73448bbb9c11eeeba9b5f73389b0ca61fd5378ea9232048d8c11b9aa6e7&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
