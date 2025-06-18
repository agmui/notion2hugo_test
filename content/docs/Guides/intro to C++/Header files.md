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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MEORHJE%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T061328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFT9ScyDlIAJjAT5FBl5ZNfVXwPWwO7PNiuwOf17pVeQAiAoTyA4o6G4KLo62NdRc%2FEGtUGO9aY5vCFbLepJZn2MkCqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVdfrqZ7dAT1di%2F44KtwD209SKYJ7CcEMomlzyUBOoy026VMGGm%2BJ6VA31zdMC0JyyHpKBSG33034IBOygtdiJ9CX0nG12swD53nck%2FroO%2Bq%2BGWfC7I4N4QVSaBq43GeA6PwOGRlEmAOFMkyZiFxhiIbUJMaqJf19PFSXm6%2BCjtzKZzg6En039tuV1E2QYTpjRby%2F6Yt9P%2FWdzYRI4kS%2FoR76XUmihL%2BR3ep8yKsi7jP9hziNsmlxNX0dtVA2gLse4MqWO%2F3Rcabxh37GMVk6QA0dwdg%2BX%2FNKwUWw6z3nDs68XQCMvNOFSTB1CTJYb8GgqNX6JCfw%2F2Uzyvax9vHRKva0cCeE8czqIlLrXvGDyPL8Wnar89OMc2JLM3KhR%2FGT7aU%2Fv%2B4scZgbSr1XeUvudl4tIHR7r%2FjP1YRnwpQUZNGC0s%2F%2BVYuLTLQDTI0g8ytoCYL0wN8Cc9dnEFDLN4eDWkOuCORZSZE1fS0FFMPswlR6GqtbRyjg9KKkpos%2FY13pwJCeSVVSBP2Bj5RjUm8F2kazSciM%2B%2F2jUfvhcZbyWCsLEdbtSSOHSKv5rXbviz1WxUjGVnLJPUV8sYMzLeDK6VkbxeMxovg%2Bq7H3VKkFMGF0BcJo8MsmQPxk3X1tqh%2Fd9G8k7oIdEmpdkRow76LJwgY6pgHUu69dEvnIuNG2DMXhQk78gjYeluduIevqGZg4biFXAibw6kgibQIuKyO2icndIr9gWwk6PNrzEHnJPKkhYIRibtvejdIvk7U2pqD3MlESzZDzni5nEixuNAXAGKG%2FywaeSlrLZLEtt2vbh%2FQbxCZSSHt56fXid2n%2Fr1adXCWv36O4aU1bu8utCk1%2FD53ZdmVD9WzwqDzJjzLMic4k6MsrTt8q2yKC&X-Amz-Signature=3095a150672ba910d104e276b7da94bf1aa1a193119435e63e4f6d6e703f1ae4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
