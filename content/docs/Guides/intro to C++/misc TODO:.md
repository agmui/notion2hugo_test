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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LSNI6RB%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T024704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFAYkRwVDXaNrSjqGP0NEEpIgiyJhDsncbB7Z%2Buaa%2BIuAiEAjv7CxXCv1XPcQhuKzSw7LJttpihMLjApR8kpR%2FA4dSoqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN7tvSerx46fTBOW6CrcAwk7WMm1kpGbGvcquN5d7qi5Y1fawrzVv2r01gvHMhCxDR8Qnw2z4MH6If43D2B6eO%2B1NLJal8%2FGbOPdDruT2NFYOEWZwDNT3k3ZEqyDiaBhBoNYLzS4vFtGjAeairWbTlxfBsv449V9eO8wDlMyPheDWae%2BDVPeWzsrEkAlH1yx1dgZTrgsHBjqpj0xVN2Unpmcev7%2FUr4zy7DfWWA7raak3rrmToURknaI6QxUYp5XNMRkxJfniWpBlNP4AcrvHGNXaqC8NKJzMRQgl58emUjopwp3TlvpxWiMc3Hk8XwcldTEA78eXwwEmWC05cMi6Gv%2BVsuSl8e3C4%2BXUt28Nxh%2B%2F6Hxue3zqqLHr4NSTS20W7PfJ2ExAAbb1RCJW3lSm0t%2FxJ2SUTC%2FK8%2Fb6bdDUNrO6pT3lHYGUIXFjSQJdXNzb950lmuhIOOtLz0%2Bs1xaihNOayMygjBr9y%2FoCoE4nLSc2H0dMYbQ7BXUSEAZ1VF1Inl%2FDtgOiftoktSZUrHXAwMa8zmUCpNYBnwXpTDjYGIXcaiLUZ5%2BXlY5smIYqwkxGJTnZylJgxc%2BGGgathRR2Bxl%2Fad%2FX8SodMMZwwmul4AeTyK2xneUg1AkLWhY0X0%2FjGS5jcdZuCHu6sk5MNS1xsMGOqUBC02y5OL%2BnghIqyKnsBHTbOxCXo9z7hR6rrdcJ5WLW6NPCLKqrHhdss8Lf6r%2F0xXwZjbH435sjSxyeAZD669sTic1DSF7QB%2Baf9rOKKjNxukwmmjnhKtKsN36KWj3sH5OUPjp%2B8awNoE3EiwR4w9hAbAi49D0jQKNh90CLh%2Fbv7SO1Uo9KYaHKs8PXN8SoF5m7oDnDNvFpPn9%2FMYglHd0ysGMAzC3&X-Amz-Signature=2b96b7b22ca786d863d62c3d5bf1ae387128cb9753026f6f8ce5143650f8944a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LSNI6RB%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T024704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFAYkRwVDXaNrSjqGP0NEEpIgiyJhDsncbB7Z%2Buaa%2BIuAiEAjv7CxXCv1XPcQhuKzSw7LJttpihMLjApR8kpR%2FA4dSoqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN7tvSerx46fTBOW6CrcAwk7WMm1kpGbGvcquN5d7qi5Y1fawrzVv2r01gvHMhCxDR8Qnw2z4MH6If43D2B6eO%2B1NLJal8%2FGbOPdDruT2NFYOEWZwDNT3k3ZEqyDiaBhBoNYLzS4vFtGjAeairWbTlxfBsv449V9eO8wDlMyPheDWae%2BDVPeWzsrEkAlH1yx1dgZTrgsHBjqpj0xVN2Unpmcev7%2FUr4zy7DfWWA7raak3rrmToURknaI6QxUYp5XNMRkxJfniWpBlNP4AcrvHGNXaqC8NKJzMRQgl58emUjopwp3TlvpxWiMc3Hk8XwcldTEA78eXwwEmWC05cMi6Gv%2BVsuSl8e3C4%2BXUt28Nxh%2B%2F6Hxue3zqqLHr4NSTS20W7PfJ2ExAAbb1RCJW3lSm0t%2FxJ2SUTC%2FK8%2Fb6bdDUNrO6pT3lHYGUIXFjSQJdXNzb950lmuhIOOtLz0%2Bs1xaihNOayMygjBr9y%2FoCoE4nLSc2H0dMYbQ7BXUSEAZ1VF1Inl%2FDtgOiftoktSZUrHXAwMa8zmUCpNYBnwXpTDjYGIXcaiLUZ5%2BXlY5smIYqwkxGJTnZylJgxc%2BGGgathRR2Bxl%2Fad%2FX8SodMMZwwmul4AeTyK2xneUg1AkLWhY0X0%2FjGS5jcdZuCHu6sk5MNS1xsMGOqUBC02y5OL%2BnghIqyKnsBHTbOxCXo9z7hR6rrdcJ5WLW6NPCLKqrHhdss8Lf6r%2F0xXwZjbH435sjSxyeAZD669sTic1DSF7QB%2Baf9rOKKjNxukwmmjnhKtKsN36KWj3sH5OUPjp%2B8awNoE3EiwR4w9hAbAi49D0jQKNh90CLh%2Fbv7SO1Uo9KYaHKs8PXN8SoF5m7oDnDNvFpPn9%2FMYglHd0ysGMAzC3&X-Amz-Signature=9963f7772e5b51eba14e4a47f77ed2bb29ce736009ce4e15ad25505b1159bbfa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
