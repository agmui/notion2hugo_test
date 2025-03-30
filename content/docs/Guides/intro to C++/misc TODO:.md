---
sys:
  pageId: "cbb61f02-1c1c-48b6-9015-9a3b096c1017"
  createdTime: "2024-06-25T02:33:00.000Z"
  lastEditedTime: "2024-09-30T17:08:00.000Z"
  propFilepath: "docs/Guides/intro to C++/misc TODO:.md"
title: "misc TODO:"
date: "2024-09-30T17:08:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 120
toc: false
icon: ""
---

### static_casts/ reinterpret_cast TODO:

 [https://www.learncpp.com/cpp-tutorial/introduction-to-type-conversion-and-static_cast/](https://www.learncpp.com/cpp-tutorial/introduction-to-type-conversion-and-static_cast/)

### [Literals](https://www.learncpp.com/cpp-tutorial/literals/)

```cpp
#include <iostream>

int main(){
    std::cout << 5 << '\n';  // 5 (no suffix) is type int (by default)
    std::cout << 5L << '\n'; // 5L is type long
    std::cout << 5u << '\n'; // 5u is type unsigned int
    
    // basically the same as
    int a = 5;          // ok: types match
    unsigned int b = 6; // ok: compiler will convert int value 6 to unsigned int value 6
    long c = 7;         // ok: compiler will convert int value 7 to long value 7
}
```

{{< table "table-striped table-hover table-responsive" >}}

| **Data type**  | **Suffix**                             | **Meaning**                               |
| -------------- | -------------------------------------- | ----------------------------------------- |
| integral       | u or U                                 | unsigned int                              |
| integral       | l or L                                 | long                                      |
| integral       | ul, uL, Ul, UL, lu, lU, Lu, LU         | unsigned long                             |
| integral       | ll or LL                               | long long                                 |
| integral       | ull, uLL, Ull, ULL, llu, llU, LLu, LLU | unsigned long long                        |
| integral       | z or Z                                 | The signed version of std::size_t (C++23) |
| integral       | uz, uZ, Uz, UZ, zu, zU, Zu, ZU         | std::size_t (C++23)                       |
| floating point | f or F                                 | float                                     |
| floating point | l or L                                 | long double                               |
| string         | s                                      | std::string                               |
| string         | sv                                     | std::string_view                          |

{{< /table >}}

### Const

- `const`
- `constexpr`
- `#define`

### [Enums](https://www.programiz.com/cpp-programming/enumeration)

```cpp
enum season { 
	spring,
	summer,
	autumn,
	winter
};
```

### compiler flags (`#ifdef`)

before compiling we can have some options for what code we want

For example, we can have code only for tests, simulations, or hardware

this is done through `#ifdef`

In Taproot the options are listed here

{{< table "table-striped table-hover table-responsive" >}}

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

{{< /table >}}

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YHNXF7J%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T150102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCIH9dSmEmaBaTImcOGDdlDH%2BWE4nVmVSFEU%2BgBuv8JYfxAiA8BWzswlGt9tf6wusrEeLQinxGX3%2Btgdprge0THaRU1iqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7UyleL8PvhKpDpMxKtwDa4zZaYBmvNREsHRIpl50mlUo9bvuUZTHqkaL85mTSAAXFT8cFHcb2KqHp5XFaS1wxKfDnRmM11oKr1asck%2FWJr4Zchsx9PS6%2FAj1R7jZjBwjEE%2FNfa7mi2JWnje5pd4tjjmAraPBfnFAw7MmH8SDCzve65hTvjoGsls9l3MJtTTGDnSB5KJf%2FtMq4GPCBZsM%2Fvj%2B1agv5xIBPFrz6k7BGXDYLt4hh7PEgbfVMCTFW245tnTSvG5vzSfK3xYA7A%2F20WBND%2BkV%2FxU3LKCZFcEY88LS9YZjEq8N6WRxNZqQ5c3OkQ%2B08O6gCg19P2okeOqofym3ElXHJy91fTdLQyR2opNF7MIjr4ZMrOzMNSxuJ8wE582eOogm%2FZfjsLhl5sTs4fn7ZzeCW4dwOSNcEu7r3kx5w1HY8Bae2Fp0JcMf5RYvQ9hZQSzHU7NoRjBcbKU07EhKkI2oFrj76qhfJlARKD2Phn%2FcoBBlM62caPtl4orC8%2BFHTk4VbeP1HcvvAzUnBSm77AbXsT9Iv2gkMp%2BsxPR5%2F2I%2BJeAIB5XJH9FmL%2FELEfL16cfXl6doCtUdv3spAEBr1aaVz3y6ZhVtz8%2BpZDcHARrObAtK2Rcn8Rq5G57rv%2FtQUj3kxy1VNQAwu6ilvwY6pgFAtCniBq5K2xhc4BuxafUpMB%2FWRcCISJ%2BFwf%2Bocftv%2FxQnlbcWpXJPdVOsXaQIV18ozAIJals5AxXMSShahQ7ekV6jvjWE%2FIk4BDC772%2B%2BDEc7RaWNonEL%2BT%2F7Gp02r0bXlyM3IiaRbeS%2F0zfJQuna%2FrjmspdojmG7%2FzUC2FvFOSOKwbLKJlFfNmUrckURmE6opig3M%2FvPN%2BUo6JBMZEA499um%2B%2FR7&X-Amz-Signature=80d2afe52b2ff4ce5c23b06188a9239427ce3e89b0a6a55a9d2018553db8fbcf&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YHNXF7J%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T150102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCIH9dSmEmaBaTImcOGDdlDH%2BWE4nVmVSFEU%2BgBuv8JYfxAiA8BWzswlGt9tf6wusrEeLQinxGX3%2Btgdprge0THaRU1iqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7UyleL8PvhKpDpMxKtwDa4zZaYBmvNREsHRIpl50mlUo9bvuUZTHqkaL85mTSAAXFT8cFHcb2KqHp5XFaS1wxKfDnRmM11oKr1asck%2FWJr4Zchsx9PS6%2FAj1R7jZjBwjEE%2FNfa7mi2JWnje5pd4tjjmAraPBfnFAw7MmH8SDCzve65hTvjoGsls9l3MJtTTGDnSB5KJf%2FtMq4GPCBZsM%2Fvj%2B1agv5xIBPFrz6k7BGXDYLt4hh7PEgbfVMCTFW245tnTSvG5vzSfK3xYA7A%2F20WBND%2BkV%2FxU3LKCZFcEY88LS9YZjEq8N6WRxNZqQ5c3OkQ%2B08O6gCg19P2okeOqofym3ElXHJy91fTdLQyR2opNF7MIjr4ZMrOzMNSxuJ8wE582eOogm%2FZfjsLhl5sTs4fn7ZzeCW4dwOSNcEu7r3kx5w1HY8Bae2Fp0JcMf5RYvQ9hZQSzHU7NoRjBcbKU07EhKkI2oFrj76qhfJlARKD2Phn%2FcoBBlM62caPtl4orC8%2BFHTk4VbeP1HcvvAzUnBSm77AbXsT9Iv2gkMp%2BsxPR5%2F2I%2BJeAIB5XJH9FmL%2FELEfL16cfXl6doCtUdv3spAEBr1aaVz3y6ZhVtz8%2BpZDcHARrObAtK2Rcn8Rq5G57rv%2FtQUj3kxy1VNQAwu6ilvwY6pgFAtCniBq5K2xhc4BuxafUpMB%2FWRcCISJ%2BFwf%2Bocftv%2FxQnlbcWpXJPdVOsXaQIV18ozAIJals5AxXMSShahQ7ekV6jvjWE%2FIk4BDC772%2B%2BDEc7RaWNonEL%2BT%2F7Gp02r0bXlyM3IiaRbeS%2F0zfJQuna%2FrjmspdojmG7%2FzUC2FvFOSOKwbLKJlFfNmUrckURmE6opig3M%2FvPN%2BUo6JBMZEA499um%2B%2FR7&X-Amz-Signature=11b648f797dfc904e1e1c67da238bbe7e7115466ddac9af948c7d42abc8985b6&X-Amz-SignedHeaders=host&x-id=GetObject)

## c++ practice

Using everything you learned try to do these:

- simple ArrayList class (try adding these features one by one)
	- class field should have: size, capacity
	- should use a template and namespace
	- Default size `#define size 4`
	- Constructor should either take an list with values,
	 or nothing and just create an empty array of default size.
	- methods:
		- constructor/deconstructor
		- `get(int index)`
		- `edit(int index, T val)`
		- `double()` doubles the array
		- `append(T val)`
		- `print()`
	- If you want more you can write sample classes for stacks, queues, trees, etc.
