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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOXTCAMK%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T100859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKhu3ZitzCEerPh4O0%2FKqGAQGvibe1CkK2SYwgaP1EugIhAI%2FaY6uQY5U0Pd5U57O%2FWcxiWf1mF4gB9OHOr7%2Ffrfg8Kv8DCCoQABoMNjM3NDIzMTgzODA1Igy%2Fy97AuQ3IgFhUfJsq3APIe3%2FWGuLicU%2Fo6FXiyq8nljkVv1shJtjyybe2zvcyydhIPAA33hD7vWBi5u3jJW8el01OR28JVeLQ4EuDUH22lWmG83Jl%2BQJcfB3aEX%2Fa64hGkgR6TsnrivfFS%2BCYEQ9dIwDED6AXPYjqsOaLNwy%2Bkzwy8LHXe4UeZUj81R%2Bl3cSNk7aK8iovZAubIVsRy4kF1wD8mIKlN50%2FQFEOZJdJByR2Jy%2F0dmW2jebnyg4jRw3kTScZspi9J0SfzPovKi%2FortpTwjjnUFToAhI3A1ufYO2H%2FtxWMc04PwZ%2FgulhFsKCU1TAu%2FqD9yi7NzCfaNyUR%2F2QfmmugGQakshqYC3IsyMhNtlWmycLJSiN55UQ80HL8s8oVL5XNmWNJjE9eZfqgcl1Hy01zHiLez7VC9pSUcvEuJ9GPfDSx8WKekG%2B2bGca5o0JdV3YhN73NPUdqnBRvm1PH594vic8ToBdYJHjHZ5w2pxmVaFrNxdP9hperqj3HopzNYLoV1R7MO4ZiLf3nFBprPpRTCaVvwLr9%2BXaahWHisRa2fqkU38C3nTEDg6i1kdeR2gES6UW14FKaKICvZEcJdscABm0XHl0KEeee4U7Sc06lcJu7QaBJeMxgnWv4nKimn3VQqMrDC%2FnK3ABjqkASzlHBGEifroKOJCIPznC3roNsFYSDb5qWRyhqUIU%2BvepuM7%2Fc7zivXBFJe2lH6bYsvjAqBzn4qhNB9wd0XxAnhPuXL9Du99FoSvcs00RlMhpBqIYF8Gybi2yCFP7UZ5xj%2BIZtYigJ3iShCvc6RXwPzj5j3EUlmTV9y1%2BnMEjFgOk%2Bvrs8Gzr%2Bys%2BcR3Ie25s7hxwLoqWVgWKJmPHLvC7IWXLykI&X-Amz-Signature=9a8926ef52fcdab6b101d62bf35208dc32f8e4236bde81e38b2df84b575e567f&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
