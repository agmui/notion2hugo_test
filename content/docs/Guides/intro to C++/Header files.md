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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JUKOC7E%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T200924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH0xm%2BjcQ4Pgem3P3UsGoJvhBrj4onWeK3ODAeY2TV3bAiAl6k4cCag5mMQEaD70xaNWpz3HhAvKMSWbWwGyKHJ9BSqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtmz%2BMmxlJ7Y7SuO%2FKtwDxaJ%2B5%2BTajPqVgB63%2BrxuCBXqIEIXoh53FuOotL3%2BqLf%2F7q1bey2lqlXq0PdcIic0XnGsBJYAKAufuPKq0OIhAgmEhx2wBC%2BYgV8yneH5JtUgEnZpYvrRDWEYmGu%2F%2BEQEJaWPqsPKORWPDxRzc2esObuyU6sKN7%2Bh%2BEMDu4ghe%2BEPT%2Fj7TzG6UXx1dy8obwm12jesOn8VvSN1JAWTX0QwJ7G4jtgfsADVNCYoFZqHCqZ1DhbL0h%2BEa6M2jmDjHos1%2FbVEZ6PmIS5SLY5FGSVJcWOp98HpSBs8%2FKXZZKCvVthxXa4GnL4fOYSlbRIXS4ZVUtlNwZJG0hVJimtk6eGpdALnnnIVa5Da58oYCMkWMJMdoNdy5g7W2YFQuTqytx2bUW9a9yyDxdosyBFx1guxOqx6zZPUnIvXHXFev4%2FUweKkUxWZ9QvyHyKniH6EUPOYZstAouvKvCMPZvGg8oaFV1DBj7dDYp%2FxCSDHWHJ1OFh%2FZ8j0zWID1cIFMX%2B5Hj0wq%2BBVF0JJ1O7QtKwPfkAeb%2F2guJan%2BB1PmHA4FlYP84UKQ0D%2Fvn7S2ICbeChNdk4R09bgXQxkXFHhevzteMA1sSm3vPDz0MmzlUBAL0ZbTkmmpuETNQQ7WySNPiMw687EwAY6pgE4D0BYIQ7%2FJ%2Bjllihdt6B0d%2FlfvlpfxKdj427bkckDqXIXzSSVL%2FJgZTkO40GL2s78OIVFzCk%2B1oBevodZnTN7nfxyBiFNp4GKU%2FE2NXMSblr6orQ4D7kt2cReQdSVAKp4w2x2NJsqq7FOyuS%2FGBIrx%2FtjgHLA0kXC6AKXhPLChYuQyk92DUlRe%2FWe8fwll%2Ba3vf%2FJJ%2Bagiz8c0mQhq%2B416jszqxMR&X-Amz-Signature=b10a8d62d469522225d841f098c962a2a10ca813d7bd15d442e8c1621149f4d9&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
