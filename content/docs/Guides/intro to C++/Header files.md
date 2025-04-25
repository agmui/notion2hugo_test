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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TW7LOFCN%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T022346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNhJfKVDdpAtBd6RZ5QnmXgE1haWZIcpkBkCJV83bPVQIhAJpFo5P5vbOM4wSbXYgerhNU%2B2alA5SpLue%2FIStD5PS1Kv8DCCMQABoMNjM3NDIzMTgzODA1IgyQLmq4%2Bskz44YWr5kq3ANLfDezcWKI4%2Fv%2FQnUa76nsloNnIxXYStHdV%2FuKz1A8TMYVtiDS6J6gKG0u69q5thAEwinxWanc42pcBUQLwwqg07LWOSzbbF8Hn%2Fh%2BwFK2ZqNcDYQXVb5C1g8lwWzKgemOcZCrfxlrPMxe23a2h2KoaFelfuZoP4s%2BVfjeUUuDlaWvClbLzArlThhGVPN3f9aBUeL1eia92BhixW5Wa06TywfYoYBalLZrOtANi7UXL4Nz6OpWsYtIP5O5q5qF4YpD3mEK%2BKgLnsFD0IdxWF5NIfYYPGEWE84vuRe4l2OfNrzhxYXYb991qhcJf4%2FL9nl4UH763TrpnEzzjOyZ0e%2BtXNBW29BYAP8nx%2B3ThymPeE%2B8ge1NxshraQ59k%2BtSqNKo0vIGZ3CVdJ82%2BXoIEZeoF1VTMQLp5TR5lj8FhC8s2jcEAjJNW794UyoQ0hxIqFtDaJnNqVpRwVtmoAlX71YINHrXM1bJZBkxYpv3UdubuUVjT45m%2FJsfGt4g9ZeqkOJp3ftBKrS7o1X93J7wrdS3LhlaWpDEjM3rPDfJQZeJ2DpaA6pNKO5qfbpBsdLeNm5jm8HtadpMYvg9HP1BUqFe4DN%2BwmULS%2BYO5r%2Fs3uuYSIpwAPT3gxy0dk5KnDDX36vABjqkARwpUqs4CNr1Fh%2B7Y6V0Q3knRbvYi6Ga0bxi9sY95rAtxRFhV1y5SPsv06c7MFuxJUE4rqW7M4yp%2BZ2yB%2FdQS8Da%2BBHbOj1meSuKIfDfeVCoZWhsBrvUjUeEdZygodp%2BVWx5eYD4oWDFsBqQBK4A0thgQRGH9t%2FyvFSsTIKlT%2BJnlBE9Sr1hieIzFvTBgD6wI7GF%2BbSRvLlBOf%2B4G%2BMIf%2FKGG%2Fbo&X-Amz-Signature=48479f195b0a9b703ee18b2b08eed4225f41adca0a5b219f6e0e6f70002e5d76&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
