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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EWJW2H3%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T131440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIGMkJrmaIJNq2ESqVgUa3erGX9RbraKxkKtfwcIfufZZAiBYwzZMBLBBjrwIu1upVoNChWO8xDugMUHkNzLPDP7mxCqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLTJ6xBClVYOk%2Bk0%2FKtwDP2OdG4IRzhoKX0QrOO0I8fsrCWIaDPAv9F%2FGIcJUETYnU2DwNssQmOMB3kKWvrSelggkmAummzaEAQ1%2B0xlPs2zPJewsCLoA6YYAL4YNKPXK21jzO%2FZh%2BkrbBsRQdrfYeK0HDHl7gUnAUfY4%2Bf67bhbAnJUtgKdIth5rJqRp%2BanKWKgdo3gN5%2Bv4i2SOtSLHVoISPJmB5HQvdhM5YpnlrVfUu5%2BnbnWW%2FM8R0lfYcrebVNJjZaTjhQWieNVjford90EwjBgA76QpK5vHrsBX76jTaG9AnCp4yy0MUHF8%2BAUx3MfZYHUjU1qRD%2BguPOrDyvdEOLdvm60wCEVztOVmSpH3TP%2BrqRrpLlXrhnFQ9dTGKiQYaAfHhL3qDDoiM6kSmebm7MoHPVB6RR5rbdoKoFJlsoG810HAniznZje3ZQpwwImXL0Flo0sh%2FZEqhp%2BZ%2BrC%2FGjDH5VF36Q1%2FgBOiQlYZXHdxDNW8%2BcOItmd9Yxr%2BE9eVqt4kslyvNHFwaCe5QWmVCcffMZ3Oo2x0sMP5n%2FF5BoyFZTPTzPpoCbIUv2tCG%2FhdOLEXTOrthoSkaa3JK9lMVyXaDcWuora0deHZMmJG%2FnAiMw0PZxFjLPQXdi0w7PC2AZ4e%2FlRZPFww%2FZyOwAY6pgGJOsnX6HHH5R3UOGTXuxr9TBFOdIMEkKT%2BN1b6hzhjZ%2B18XltTchBzeIkdVxcjeEBwXGL%2F1ZGGp2KqTlIrueWaIR9%2BgIWG5dgy2UtxJ5YyKv97mVDj3E5MZWnmkJqoJ9qCAT9wZnVhNQjfHICEKrluG4ZSziOew5PfaXRvWnTlIpS3P7LQaseGlFtaQRwFtUFkvCK%2B5SxElXg1tTL%2FWMFlFJ1MxfpV&X-Amz-Signature=5e06ec69675936c40d46650a9cddb6dee1fd6027663b25a1af020c5f9ce211ca&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
