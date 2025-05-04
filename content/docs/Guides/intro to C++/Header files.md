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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ANUZ3B5%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T041244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIBjsQMK3Nh6XJGVjbmi6t9eVoP0Jr78jPq71Ea3iM8C2AiByf6UE%2Fh7xyI6QrTY4Oa9ZjjywGfwIU7bP8hQYAV10riqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoLjlxfBcU6LXKCnUKtwDlH%2BFfKxPqLm3OefH%2BjL%2BgX3NKfY%2BqtMNUa%2BIaeRFcE1DBBqHRngg7w2I7p49o710%2F8tl16eF1dmQF3v3tHCrW1l9Jk9jRUbyrg70AnaRldDAg2%2FaB9S0OUE1AkdOdJ1Q9bg%2FsuOUJO%2B3UJvA%2FeTzQfY6aX8wez23nza18lNYDLl5oJYPXPYKYSFNyUOUOBmsUA657QwOC%2FKdoqX7Mu4AQOt3QQAiRPyTwCeoWCWioK%2BHrcCSRLRkywy4otpQ1NBmlmNxdSNzN42agMQ9D5Kyl%2B2xJbz5MI0t9IrEYE2iu2dSMKUu5f2zFi7TgBjhmp4lhIIeRo1a3SFpmsrt9HWJxQ2esUUfHIbEdbxr%2BgmdCyr2QX%2B%2BfbzHJQZTM%2FlkTa%2FL8q%2FFmRhE1HsJ1ZVZETt%2BMAIVoO9pzuElYialjtIgepLIbDibjqUDtWo7OOjh1yeHi6ZJUpTpMlsLWTAxNhQ8mp8M9vu7yde2GTrK6zrkk%2FjSiUEYXDBAs89XgItsmfaBz1Umfrupfvt8OmGjNl4nihlGT5OQbdP3fToQfA0Od4FEAiLJ%2BBD5Qil%2FthxzjSaVfwdzh7JwqFzBzEezlHwXofhy4Oe4o3LHSul56tlOWqCa%2FC7QKwirbWl6Q6YwnfHawAY6pgEBRzMhUmfjYEPnjZ9t%2Bb272MNwR%2FmsIdu4IuD%2BQS%2FPNn9nZJ0XjO1N7ytjwAdS3fDGrFOhuoeL97azoPmsJwiDr2a8uCtKrJc0iUnIGb4zmhde1JYxUuSZ7XeLepthN%2FwCxAl43pPUPOy%2FGgCpXgDymw%2BBkyBSGAwC9B3%2FbzpBk3iXvOHmNShrE51dUwkBqvIH049cN77RNTWptSDBDUxddIHqF88S&X-Amz-Signature=e4adfb589c1705e0da1cdf7cd54458f7204f19abfb21f34370fd9efd1966d450&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
