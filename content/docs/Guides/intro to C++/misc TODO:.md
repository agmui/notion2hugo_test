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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVPWHFJM%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T161046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQDpzVhgi2UMYE%2BwY0xUNtPDE4XMUoyqUTWCJENu2u2%2BngIhAPMC1FltZMMdHcPzPX7dGD9G9fO%2BDr7AeOVrhgUbz6lmKogECPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxTaJBgSwk895OaOocq3AMrhyehylZ0uOC2II%2FZ8xJhSKlxfJ32tpnB3wV3aEgAQhFJAFsmELD4E%2B3nfzfNPNsBe0olIh9mmadRK51vEEUcVSq7M%2FobG3aHeghFZUalD%2FGq%2BIX4OaQqtjXQ2D%2B6SRiieWcVq32s6GfSaBM5g9HFW6gRNSPDlI5muWc1HC2d0xhC4ySIEUf6YKfIdmzuYBPPsMbNOrKNizR5CDIJCj4XTPVV6kEczA39PVnamZJzYUzUJM93oCy%2Bwoz%2Fksa1pMTHCbkvDplSofjs3coL5NKpCOVyXPbAClTmgIhVVwjrsB1Jngy3KuUhqVT2DqiWjovAtDLNr2Y93RMn6Y3jkUKRIU6ILlX%2BSEiTFyAhi3RMcuOvfkxBq5pOjA5cobq4H7cKNAzRTjB7NaQBYxDhk8vZ4hQXnUFZCxqcdcUq%2F8dQ3RXGngrxbpOekmZVQZaytoWxIwMs0IPKQLyxPH3zazpLxYJRCGDU2Kj9fRkp7s4iGsAbSRSCi7D9T4baVBNviTdJ6P%2BM0xN3abfnJMzHKRlQ9ybQH64GbxrJH6tKwNSc9FmcZHxoL2t7c0m6IzEteMGpeFEd7QRW09LPWV%2Byv5uggGN%2FDRlsK4pxpS7Y%2FdiNjUFXcjCqo2Hiw5dvnTDQiKTABjqkAamMuEC8gI1QDYLTIasyEwC2Iv5eVONEF4ObTgj6EcqFiS8voJNIxWwC%2FMvaGLj2Vmp0qLS3re7hFq65EL%2B%2BkMdRhvWuZ1mKYiw1pyk72JhXj1ZMML3kWGu2st3lTGzEUMKe%2BuMN4%2BTSuy2RecjDbhX1BuNENFwuR7%2BVEryD01VVyufupuOIBNtN%2BKABh4se3CKoiz7ELfB%2FPeL3lrfkCFMnlyDf&X-Amz-Signature=f4840d49cb380286ce6ec0eb78b06d6257d2aa035da8f605266930bc00a3ce91&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVPWHFJM%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T161046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQDpzVhgi2UMYE%2BwY0xUNtPDE4XMUoyqUTWCJENu2u2%2BngIhAPMC1FltZMMdHcPzPX7dGD9G9fO%2BDr7AeOVrhgUbz6lmKogECPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxTaJBgSwk895OaOocq3AMrhyehylZ0uOC2II%2FZ8xJhSKlxfJ32tpnB3wV3aEgAQhFJAFsmELD4E%2B3nfzfNPNsBe0olIh9mmadRK51vEEUcVSq7M%2FobG3aHeghFZUalD%2FGq%2BIX4OaQqtjXQ2D%2B6SRiieWcVq32s6GfSaBM5g9HFW6gRNSPDlI5muWc1HC2d0xhC4ySIEUf6YKfIdmzuYBPPsMbNOrKNizR5CDIJCj4XTPVV6kEczA39PVnamZJzYUzUJM93oCy%2Bwoz%2Fksa1pMTHCbkvDplSofjs3coL5NKpCOVyXPbAClTmgIhVVwjrsB1Jngy3KuUhqVT2DqiWjovAtDLNr2Y93RMn6Y3jkUKRIU6ILlX%2BSEiTFyAhi3RMcuOvfkxBq5pOjA5cobq4H7cKNAzRTjB7NaQBYxDhk8vZ4hQXnUFZCxqcdcUq%2F8dQ3RXGngrxbpOekmZVQZaytoWxIwMs0IPKQLyxPH3zazpLxYJRCGDU2Kj9fRkp7s4iGsAbSRSCi7D9T4baVBNviTdJ6P%2BM0xN3abfnJMzHKRlQ9ybQH64GbxrJH6tKwNSc9FmcZHxoL2t7c0m6IzEteMGpeFEd7QRW09LPWV%2Byv5uggGN%2FDRlsK4pxpS7Y%2FdiNjUFXcjCqo2Hiw5dvnTDQiKTABjqkAamMuEC8gI1QDYLTIasyEwC2Iv5eVONEF4ObTgj6EcqFiS8voJNIxWwC%2FMvaGLj2Vmp0qLS3re7hFq65EL%2B%2BkMdRhvWuZ1mKYiw1pyk72JhXj1ZMML3kWGu2st3lTGzEUMKe%2BuMN4%2BTSuy2RecjDbhX1BuNENFwuR7%2BVEryD01VVyufupuOIBNtN%2BKABh4se3CKoiz7ELfB%2FPeL3lrfkCFMnlyDf&X-Amz-Signature=e1c14de2f618a866ae2aba2b8b4c0b9d70acf06d4d817ce3ec1718effe807930&X-Amz-SignedHeaders=host&x-id=GetObject)

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
