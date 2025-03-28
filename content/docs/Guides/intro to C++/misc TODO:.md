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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRH5T375%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T041006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIADYWzxHPgnp0VowIkTJqmvoY2KbXUVBV1hwWTmT7djiAiBcjhapih%2BR037cmyUWabMDiPPH0oYM8%2BmCroaOgIgrFyr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMlSyY4mBq2T9H4%2F%2BSKtwDecSVzbn%2BHJDDrlXhtcTsyESKHDAySNhr%2BiJLqZkyj7hU6pV%2Bl0WPZJUplb67bNRdQzUzRp7ebCioBJV6HFPrWET6uLnnSGTJ%2FXr3bd6S9u7IIgOg7sVtsOy6Cqf1Ryszd0jD8pp27gLHZuewaaMMy5eSprSNyszvDKrobblg1f81WIzIUvnRk0tJWf%2FDQI5YAgE3AE9f8OWBSOS00ledAOWB8iktYCI5bXMTfwJJyoWc02aVfSWg5nFL4H75U2ejGjhpcHKE91j6P5Xvr9VpWpxCgUzvER8BdtmLBLnae1%2FdacxrcJ9QiVSGL7rUmKe%2Bvn5qzplodqxfzRzZpj9K9qEXsI6mi%2FA7syL7NFBCAPXX0LBLgBJDxuTA6aJS%2F%2Bvoq2xQ969g2Sq84l%2Fi%2BlNidCWfyVV3QCNlsz94Lmp6vtU2J3f63s7rPoTcyEgoIdiB3ILuLvvnIcseUDHHCAnn4Tzh%2BQh%2BEgJqRioJUkjOezs8JyK2gcMty6Aukw1L%2BBNOotVmrtIPeODQTjllLY5pRSGJg71GCintZEPCUx74UAmM1lMeJbLEJXLaRgD5AeW1V3a3Jq2JKcfphOcGALMNemz7LTVyhCQD7QfG2JqJXLbQTNt64hoaU7RkDUQw36%2BYvwY6pgFn8S0zN0ROI2MBK0w7lNkugIqDEFnoWbilpCYhXiPt0J%2BoQ3nSxvUgw6etzPR%2BSnxDEiuKkNU2ypkxN%2BF%2BasQGMWK70Orn2TEYxshEWmNoTQkDbNU8ONcwmV2j4FVOExITyxa06l8ghrYB9HcoVat8G72wqaxjZqzUNJ1xU9NmjxsaqWfPFT0ZcGAHnbOzo5TC6f7mWUgNMJ628vyAKVNfeIvsdUse&X-Amz-Signature=79e618bb736e9b80fbc51ac4a5663bc8c9f65ee35b26e8eb19a46b1e80d2541f&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRH5T375%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T041006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIADYWzxHPgnp0VowIkTJqmvoY2KbXUVBV1hwWTmT7djiAiBcjhapih%2BR037cmyUWabMDiPPH0oYM8%2BmCroaOgIgrFyr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMlSyY4mBq2T9H4%2F%2BSKtwDecSVzbn%2BHJDDrlXhtcTsyESKHDAySNhr%2BiJLqZkyj7hU6pV%2Bl0WPZJUplb67bNRdQzUzRp7ebCioBJV6HFPrWET6uLnnSGTJ%2FXr3bd6S9u7IIgOg7sVtsOy6Cqf1Ryszd0jD8pp27gLHZuewaaMMy5eSprSNyszvDKrobblg1f81WIzIUvnRk0tJWf%2FDQI5YAgE3AE9f8OWBSOS00ledAOWB8iktYCI5bXMTfwJJyoWc02aVfSWg5nFL4H75U2ejGjhpcHKE91j6P5Xvr9VpWpxCgUzvER8BdtmLBLnae1%2FdacxrcJ9QiVSGL7rUmKe%2Bvn5qzplodqxfzRzZpj9K9qEXsI6mi%2FA7syL7NFBCAPXX0LBLgBJDxuTA6aJS%2F%2Bvoq2xQ969g2Sq84l%2Fi%2BlNidCWfyVV3QCNlsz94Lmp6vtU2J3f63s7rPoTcyEgoIdiB3ILuLvvnIcseUDHHCAnn4Tzh%2BQh%2BEgJqRioJUkjOezs8JyK2gcMty6Aukw1L%2BBNOotVmrtIPeODQTjllLY5pRSGJg71GCintZEPCUx74UAmM1lMeJbLEJXLaRgD5AeW1V3a3Jq2JKcfphOcGALMNemz7LTVyhCQD7QfG2JqJXLbQTNt64hoaU7RkDUQw36%2BYvwY6pgFn8S0zN0ROI2MBK0w7lNkugIqDEFnoWbilpCYhXiPt0J%2BoQ3nSxvUgw6etzPR%2BSnxDEiuKkNU2ypkxN%2BF%2BasQGMWK70Orn2TEYxshEWmNoTQkDbNU8ONcwmV2j4FVOExITyxa06l8ghrYB9HcoVat8G72wqaxjZqzUNJ1xU9NmjxsaqWfPFT0ZcGAHnbOzo5TC6f7mWUgNMJ628vyAKVNfeIvsdUse&X-Amz-Signature=5e0e238202d40e290b0c2ce36b3f2586765d3aa059b5f87f8d5f41844a796176&X-Amz-SignedHeaders=host&x-id=GetObject)

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
