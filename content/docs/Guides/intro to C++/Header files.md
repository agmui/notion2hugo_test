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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTYIOPVD%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T230825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQDuggCpSEFLP98LUWLqySTp63Aee3aAjnlhuRIUkWdG4QIhAOTDAgiASK2Va%2B4eZE5eFa74VARuN90SRCmvgQf0fhIwKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzSQ4U2OBotQFDKtU4q3AOyx8oEsZYzBUnSoY1oyf%2FCqCw1swwrkDN2AZwm4e1PQWKGvVIgT17D5nW2m54dT9vwnhYp0sHAvxDOJ%2F6Yo%2FkDjW3clUQ0LLii%2B%2F%2FCTVTBwp9XfUr3GCDy5Y3GP1TwQgXHgZRirZf%2Bmlf7SBxDJ7CAzadHR8c16FEUkuiE7qlcsm9eVYhflayEmUY10HioRD79xiqrJz4%2BT10S%2FD33%2BNHH1kIT%2B2%2FhuDqXfA6dL6x5aG%2F8bRyYt9AAbfDx5x5hpGF%2FwiycoCFKd%2FIzeaRRcL3CQFirNXCTsNEQ4sYatle5KDqa0kpIhZyEqB7L%2BTVr4rl9YJ8jf1HWL71fLQEBZ%2BX%2Fg2TDbyRLSCSrbxMVX89FxDoWgwkoxE71j8xArMW7D5n2oqxvas7wEAwmMjvNQLYTlr4OZhVr8F9ZPdMHglHpumoT6fVHaofDQYb80WdxXJ1BWanIguAC2JarOi4X6DCGYzKNfm8FS5d5XbB9WUS%2FNgSD7bg6X%2BuOiIi25FXhEF1b1dZTLY6DUxlZvGvL%2B1muaKXwImdXxnRkfIwHkDhLebIJgJ%2BxrfDarf8JLcs0LurlZXuzi%2BbLwdn8nsT72xqQgVwLS6orSD%2BgXsL4AGlvsPx7%2FSIK7bJRqYNmITC6xqXABjqkAapjKvb0juH2P2UA95vQ%2Bw9Q0KZkHQw9NzYjOfUXG2nY2DQ2hQp6PMGtFPt04A6vWFpbPpwFFF06nV7dkwsBGAYwvwZvxMs1uCR65651cBnHW5ZJl6iccNTkUhMiY8yI1i3k6%2BY5wwC3iBQTPDXjn2UGWHtGgn%2FA3R5I7GBEitdiiuTrM8BBdSaofl4gAPGYSpsnZk5fidFisDkXWlSuYquohS%2Bs&X-Amz-Signature=657b83508070f975264cb1c4e2278ba5a6a30747c029ce33aa7a0cbdc32d7736&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
