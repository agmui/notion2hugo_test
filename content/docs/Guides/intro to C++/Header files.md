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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQGY6TKW%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T050708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCY35tJ1eBo88IwBBqSli4pBsP%2BPH8Iwoy9wasrWHN2xgIhANII4oYvPTCSWzha5szIVuYTQN%2Fu190yAOrssfJD6UcCKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzJ14UylNS8k9dj9Cgq3AMrY2VqGrPIdMWbwn8%2B4Sbsf9r0tN%2FYD0GFFz4My1OXVAeY0JiQy8fzMV4MGHm%2BtnlRG4rNJAjLGuJPU4u3yNOCBuV6abcrNl6E6BW7XG0EhMVvKSz5Wyb%2B2ieivTl2Rd6ldrD28WKJ6I1Nf1ngTVS4gU4EZAGDmbSmGUt0IrmmzxnSu8pkqWW1ZK6pYm2UQSyiPThJkvCWyxxUGsOQNw3B4Ah1Z%2FlWXeruxn36RXKkTTl5LoGmJX%2BERJ86Q2lXazQFVAWMK%2F4EEfpxxdrMaM7Fozvr4wG59VIfujtpxTREzdmoFhjmjcKX%2FAdRdtH0xP5F64wNfnP0oWBbN7%2Ff8LDE99DBAgX%2F4r1MMV%2BXzSjLaXhdc5A5ahTGTNvgusPGRruLuqrxHnoHs6dMEAVaYZegqMtbq3zQLYClccIcJ%2BsgYVxirPiMgSOpgvqb8BCt%2BJ8Gn0R3Y4L0UJ5GitePolOHVEApUzpeEDX7pPdCKInS8%2FmUzBlDIEIw9wPObt5bJti%2FORSyX2oCK5%2FI0IXU59HmTmQqEwJRXma6U4jd5AIXQmu0z72qDbos9buwkIu9qe%2FdZbMwMyLfLJwdxSFhzQqyDa1%2Frinm%2BIoenXEV2JBcD%2Blblb%2FpczUeOGouCDDjvqC9BjqkAaCOxo3WZYJc1aIy%2FMRzGfS%2BCUXDLNyQ8ke5O%2FyIe3CqJ%2BfPsMRhTXJpHr4ydh%2FEfalcnZlPA%2BzQPtY0y4rvaeQt257bm6B2yL5KkFqDu4jPOfHHAU0dS3GUG%2F%2FrwieK64PNWwqvyEDvWDHVJ0%2FGyVYKJ8x3vlYP5Pt5G2YItT%2BR3nJTmhhJKdXXT5zr5pBSa9GUAETVj8pF%2BWyZTi24n3Nyu7YL&X-Amz-Signature=41062a9a7f2a7ea5fbfdb9bd45c3e408ad22f66839d002afc9b21f79ff98fb94&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
