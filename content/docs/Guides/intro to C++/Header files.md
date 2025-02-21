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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TD6PXNXN%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T121337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHvX9DIcW4nA18gAhCwcHP%2B%2F3K6kphJFWIt5WT2MuzW2AiEAvz1wLkC1HDd4%2FZILbf92XuKIW8VKESAsKuja7OeNDU0qiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNRqFIqf%2Fs14CKUs2ircA6CdR1bNiBNEHLFlupRoFMv33PQJiquEa7D3rP45CC4lX3pkuQ5AnLtRJVfPw6XCpEqq824YcEqiimunM0P5BnOBhvVJklZy%2FtHLj6odXaqnu24faf7qzPW80qjN4mq5ecYnhn%2FPx6Rx2UxRhHlPi7xMFmOybnRiWUMPfrSaz0EObwzIKuxe%2FwR7HKjj9JgQlTK79PBV%2FTk40XR%2BvE5x5Wu4WzgmHvRe0ZY%2FQPRCyzg6SuzG8OoorEHG3%2BUcUZ7lTA6iZrC7ZUsYOWFNx8eWDbdcDxYGLJsTTRJLxCFYkQRdeeY2JYaMxDpp0jtXvpXckvAfFWfDawiBI0rRHokZA%2FLF7HMpm7s%2BjsHzRzip8PSOzbWIINNhh%2BSZ7%2BXdRVUmYhbQazewEOzhKMkVPYzN1eaXQ07H8oLRRRqOAPaFfRlfgSh342b6bS8pYxxV9HYyYmsX0wZ37KvkQZxA70Ro7vyuoTzp%2FxPmWtc5mlk0fpxcc8NQGyeRH0Zl5uVPCWek7xW4NrhoDIWKL8VSqYa4Y53Gb5x0%2FmSEJxQHGQoYi8Oglw%2F2ITTm12cywi3EPwG4TYjyhQUpuZ9yUGnDepmbGcHHav7zbeVVQCnLZ027xRyEUi%2BjtyLSJojlUtuFMOLI4b0GOqUBu093uu0GbXV6MmSPDFZ3RtasH3TDC1blTImiiZ0Q8VjXZ8XtDc9FlWat0rtYz8NW%2B%2FshknxMEqth23z1flN98xSA%2F06V4%2FFnFkp%2B9Gtjmm0S1W94dwSnsyv7vEYoPY6sTdUmG%2BizbsafStuQwdaInu8iF0kh%2BwU93e6pxmN9EEbNkkUZNxhhCsHtS62CibnTiPi3LkTz%2FBxGSqqHZdOnbSznmAdD&X-Amz-Signature=660312126ecd3078bce67ac7d03fc99f2e0e55ba81d3f68888c4dc52aafeeea7&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
