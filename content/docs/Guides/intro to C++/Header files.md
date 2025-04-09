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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DLVWHYU%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T070858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQC2w%2BWhm0iwX2xV0%2B%2Fp5ukINWc4lZzXF6Tg2ASvzFbuegIhALjk6HS5JdPNkau9hUUNMCYlYwtUbfC%2Fu9ePB11hhmMkKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwALjrMszgit%2BRHlcMq3APQyvga3haMzlEErOzTiM%2BzMT7PSdVPWQQMwJqbniop2hkQvIDOoDXaRVzyf2hPyCt46x3JQh0T9Bicncy2TLkRAlwPtgRrf7ke%2BMQpB21KgG2Hve4Vhsr7AdGg1nsk1Ij4aHMhuH6Q%2FpZTLTk%2FxZiP5fZjJnic%2FjoB3hWexRdPcAZXE3k3E0oxf7TKSqz3HS75c9ljnzSeZ4WdJPSdZpHi99qMLFWtQKUhPU9%2BeG%2FJF7TAttQ5sGGKvYv%2BbuFKHtKzk%2B4Fkpmw%2F4CBQ833jMaulVlIKAa4u3lAaqo21aitDJPTJfTkinsbyWVK6n5hfPMjz39LI909IaW39c2csmtgvI%2BmYar4%2FcHtcs8JEn%2FXm%2FXoIIzMmJ8kDqOQf06nWZ79B7UqmMM3InxaEhSrvLcy%2BFHxumfVGoDCuwj1ngEp5H26EM6sBtWc4STWYTIUmxIeaV3K1%2BbSli%2FiJjdhBd2sn63fmqkKV8Yr2le%2FjZBozFZxkzFzPS8lEFMyNoXVU4iX1qFkGOfFZSUbFwF5OiPdzA77bgTj8UUnkpGjzaUYvJoEMT%2B921t0aFQJjj3VaPTbOlnGw1nG6F39spRlycRFLc8%2Bq51crUG4Ot7z%2B38G3XC0E8XMdKoh30I5RjDLs9i%2FBjqkAXs0X5FP6GgYW%2BsoTjJVZ%2B6LayB6IQzvp9pRS0FWCrIbg4t7N4ik2Qtb94G0mbRhIKDYG9VKQ6%2Fshk94pWgFQpUSOR%2B7W2qVn%2BAYKodn1dFTNRDwOUAD%2B8Ni%2Bj7NQoKs%2FSUbXaV0w8aCiGsXYv%2Bw2D3PK5OCFMDt52OAYQcsCwNgpQIyYcgvR2MWXc%2FmX7RqWos5jkQ0K9Gw6gtgYDsI%2BPJ51qJY&X-Amz-Signature=1b0a0fdd0313396d5b478605f156cc3f212ff9cb1eb2abf83b92e7b4550a8156&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
